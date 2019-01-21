const sm = require('sitemap')
const fs = require('fs')
const path = require('path')
const express = require('express')
const sslRedirect = require('heroku-ssl-redirect')
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'

const app = express()

let renderer
if (isProd) {
	app.use(sslRedirect())
	const bundle = require('./dist/vue-ssr-bundle.json')
	const template = fs.readFileSync(resolve('./dist/index.html'), 'utf-8')
	renderer = createRenderer(bundle, template)
} else {
	require('./build/dev-server')(app, (bundle, template) => {
		renderer = createRenderer(bundle, template)
	})
}

function createRenderer (bundle, template) {
	return require('vue-server-renderer').createBundleRenderer(bundle, {
		template,
		cache: require('lru-cache')({
			max: 1000,
			maxAge: 1000 * 60 * 15
		})
	})
}

const serve = (path, cache) =>
	express.static(resolve(path), {
		maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
	})

const sitemap = sm.createSitemap({
	hostname: 'https://totalliberationisrael.com',
	cacheTime: 600000, // 600 sec - cache purge period
	urls: [
		{ url: 'https://www.totalliberationisrael.com/', priority: 1.0 },
		{ url: 'https://www.totalliberationisrael.com/About', priority: 0.8 },
		{ url: 'https://www.totalliberationisrael.com/events', priority: 0.8 },
		{ url: 'https://www.totalliberationisrael.com/articles', priority: 0.8 },
		{
			url: 'https://www.totalliberationisrael.com/investigations',
			priority: 0.8
		},
		{ url: 'https://www.totalliberationisrael.com/contact', priority: 0.8 }
	]
})

app.use('/dist', serve('./dist', true))
app.use('/service-worker.js', serve('./dist/service-worker.js'))

app.get('/sitemap.xml', function (req, res) {
	sitemap.toXML(function (err, xml) {
		if (err) {
			return res.status(500).end()
		}
		res.header('Content-Type', 'application/xml')
		res.send(xml)
	})
})

app.get('/robots.txt', function (req, res) {
	res.type('text/plain')
	res.send('User-agent: *\nDisallow: /admin')
})

app.get('*', (req, res) => {
	if (!renderer) {
		return res.end('waiting for compilation... refresh in a moment.')
	}

	const s = Date.now()

	res.setHeader('Content-Type', 'text/html')

	const errorHandler = err => {
		if (err && err.code === 404) {
			res.status(404).end('404 | Page Not Found')
		} else {
			res.status(500).end('500 | Internal Server Error')
			console.error(`error during render : ${req.url}`)
			console.error(err)
		}
	}

	renderer
		.renderToStream({ url: req.url })
		.on('error', errorHandler)
		.on('end', () => console.log(`whole request: ${Date.now() - s}ms`))
		.pipe(res)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
	console.log(`server started on ${port}`)
})
