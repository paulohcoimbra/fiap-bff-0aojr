const express = require('express');
const router = express.Router();

const { findById, findAll, save, deleteById, update } = require('../services/blogService')

const responses = {
    200: {
        status: 200,
        message: 'Blog posts retrieved successfully',
        data: []
    },
    201: {
        status: 201,
        message: 'Blog post created successfully',
        data: {}
    },
    204: {
        status: 204,
        message: 'Blog post deleted successfully'
    },
    400: {
        status: 400,
        message: 'Bad request',
        data: {}
    },
    404: {
        status: 404,
        message: 'Blog post not found',
        data: {}
    }
}

router.get('/', async (req, res) => {
    try{
        const posts = await findAll();
        const response = responses[200]
        response.data = posts
        res.status(200).json(response)
    } catch (err) {
        console.error(err);
        const response = responses[400]
        response.data = { error: 'Failed to retrieve blog posts' }
        res.status(400).json(response)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await findById(id);
        if (!post) {
            const response = responses[404]
            response.data = { error: 'Blog post not found' }
            return res.status(404).json(response);
        }
        const response = responses[200]
        response.data = post
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        const response = responses[400]
        response.data = { error: 'Failed to retrieve blog post' }
        res.status(400).json(response)
    }
}
);

router.post('/', async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = await save({ title, content });
        const response = responses[201]
        response.data = post
        res.status(201).json(response);
    } catch (err) {
        console.error(err);
        const response = responses[400]
        response.data = { error: 'Failed to create blog post' }
        res.status(400).json(response)
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedPost = await update(id, { title, content });
        if (!updatedPost) {
            const response = responses[404];
            response.data = { error: 'Blog post not found' };
            return res.status(404).json(response);
        }
        const response = responses[200];
        response.data = updatedPost;
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        const response = responses[400];
        response.data = { error: 'Failed to update blog post' };
        res.status(400).json(response);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await deleteById(id);
        if (!deleted) {
            const response = responses[404];
            response.data = { error: 'Blog post not found' };
            return res.status(404).json(response);
        }
        const response = responses[204];
        res.status(204).json(response);
    } catch (err) {
        console.error(err);
        const response = responses[400];
        response.data = { error: 'Failed to delete blog post' };
        res.status(400).json(response);
    }
});

module.exports = router;

/*
Exemplo de script curl para testar o método POST:

curl -X POST http://localhost:3000/blog \
    -H "Content-Type: application/json" \
    -d '{"title": "Meu primeiro post", "content": "Conteúdo do post"}'
*/