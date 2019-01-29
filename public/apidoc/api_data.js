define({ "api": [
  {
    "type": "post",
    "url": "/parties",
    "title": "Creates a new political party",
    "name": "CreateParties",
    "group": "Parties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Party name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hqAddress",
            "description": "<p>Party Head Quaters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>Party logo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\":\"PCD\",\n  \"hqAddress\": \"Lagos\",\n  \"logoUrl\": \"public/logo/logoUrl\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>response data</p>"
          },
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "data.id",
            "description": "<p>party id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>party name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"data\":[{\"id\":1,name:\"Lagos\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./build/server/src/politicoRouter.js",
    "groupTitle": "Parties"
  },
  {
    "type": "post",
    "url": "/parties",
    "title": "Creates a new political party",
    "name": "CreateParties",
    "group": "Parties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Party name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hqAddress",
            "description": "<p>Party Head Quaters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logoUrl",
            "description": "<p>Party logo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\":\"PCD\",\n  \"hqAddress\": \"Lagos\",\n  \"logoUrl\": \"public/logo/logoUrl\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>response data</p>"
          },
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "data.id",
            "description": "<p>party id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>party name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"data\":[{\"id\":1,name:\"Lagos\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server/src/politicoRouter.js",
    "groupTitle": "Parties"
  }
] });
