let token = null

const blogs = [{
  "id": "5bf847b4113b6e5888ed1551",
  "title": "Tilintarkastus eilen, tänään ja huomenna",
  "author": "P.K.",
  "url": "http://google.fi",
  "likes": 7,
  "user": {
    "_id": "5bf6fdb56bab442b54739955",
    "username": "mluukkai",
    "name": "Matti Luukkainen"
  }
}, {
  "id": "5bfae679b624de4f84608aca",
  "title": "7 veljestä",
  "author": "Aleksis Kivi",
  "url": "http://suomi.fi",
  "likes": 4,
  "user": {
    "_id": "5bf84b17113b6e5888ed1554",
    "username": "mlampola",
    "name": "Markus Lampola"
  }
}, {
  "id": "5bfae78db624de4f84608acc",
  "title": "Tuntematon sotilas",
  "author": "Väinö Linna",
  "url": "http://suomi.fi",
  "likes": 14,
  "user": {
    "_id": "5bf84b17113b6e5888ed1554",
    "username": "mlampola",
    "name": "Markus Lampola"
  }
}, {
  "id": "5bfb9ae76adaee6d1078d1d1",
  "title": "Tietoliikenteen perusteet",
  "author": "Martti Tienari",
  "url": "http://helsinki.fi",
  "likes": 2,
  "user": {
    "_id": "5bf84b17113b6e5888ed1554",
    "username": "mlampola",
    "name": "Markus Lampola"
  }
}]

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { setToken, getAll, blogs }