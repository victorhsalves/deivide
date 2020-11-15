const firebase = require('firebase');
const { json } = require('express');
const Utils = require('../utils/utils');

module.exports = {
    async CreateNews(req, res, next) {
        const { author, title, text, keyWords } = req.body;


        var newsId = await firebase.database().ref().child('news').push().key;
        var news = {
            newsId: newsId,
            title: title,
            text: text,
            author: author,
            date: Utils.getFormattedDate(new Date()),
            timestamp: Date.now()
        }
        return firebase.database().ref('news/' + newsId).set(news)
            .then(() => {
                return res.status(200).json({ message: 'success' })
            }).catch((e) => {
                return res.status(500).json({ err: "Error: " + e })
            })
    },
    async ListNews(req, res, next) {
        const newsRef = firebase.database().ref('news/');
        newsRef.once("value").then((snapshot) => {
            return res.json(snapshot.val());
        }).catch((e) => {
            return res.json({ err: e });
        });
    },
    async DeleteNews(req, res, next) {

        const taskId = req.params.id;
        //  ###
        // const { name } = req.user;
        const newsRef = firebase.database().ref('news/');

        // fazer validação da task
        var date = Utils.getFormattedDate(new Date());

        var query = newsRef.child(taskId);
        query.once("value").then((snapshot) => {
            if (snapshot.exists()) {
                query.remove();
            } else {
                return res.json({ message: 'Invalid task id' });
            }
        }).catch((e) => {
            return res.json({ e: e })
        })
    }
}


