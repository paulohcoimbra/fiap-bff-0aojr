const data = [
    {
      id: 1,
      slug: 'introducao-vue',
      title: 'Introdução ao Vue.js',
      description: 'Aprenda os conceitos básicos do framework Vue.js.',
      content: 'Conteúdo completo do post sobre Vue.js...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 2,
      slug: 'usando-vue-router',
      title: 'Usando Vue Router',
      description: 'Veja como criar rotas no seu projeto Vue.',
      content: 'Conteúdo completo do post sobre Vue Router...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 3,
      slug: 'vuex-gerenciamento-estado',
      title: 'Gerenciamento de Estado com Vuex',
      description: 'Entenda como gerenciar o estado da aplicação usando Vuex.',
      content: 'Conteúdo completo do post sobre Vuex...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 4,
      slug: 'componentes-vue',
      title: 'Trabalhando com Componentes Vue',
      description: 'Aprenda a criar e reutilizar componentes no Vue.js.',
      content: 'Conteúdo completo do post sobre componentes Vue...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 5,
      slug: 'ciclo-vida-vue',
      title: 'Ciclo de Vida dos Componentes Vue',
      description: 'Descubra como funcionam os hooks do ciclo de vida no Vue.',
      content: 'Conteúdo completo do post sobre ciclo de vida...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 6,
      slug: 'vue-cli',
      title: 'Configurando Projetos com Vue CLI',
      description: 'Veja como iniciar projetos rapidamente usando Vue CLI.',
      content: 'Conteúdo completo do post sobre Vue CLI...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 7,
      slug: 'props-e-events',
      title: 'Props e Eventos em Vue.js',
      description: 'Saiba como passar dados e emitir eventos entre componentes.',
      content: 'Conteúdo completo do post sobre props e eventos...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 8,
      slug: 'vue-computed-watchers',
      title: 'Computed Properties e Watchers',
      description: 'Entenda a diferença entre computed properties e watchers.',
      content: 'Conteúdo completo do post sobre computed e watchers...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 9,
      slug: 'integrando-api-vue',
      title: 'Integrando APIs com Vue.js',
      description: 'Aprenda a consumir APIs REST em aplicações Vue.',
      content: 'Conteúdo completo do post sobre integração com APIs...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
    {
      id: 10,
      slug: 'deploy-vue-netlify',
      title: 'Fazendo Deploy de Apps Vue no Netlify',
      description: 'Veja como publicar seu projeto Vue facilmente no Netlify.',
      content: 'Conteúdo completo do post sobre deploy no Netlify...',
      img: `../assets/Blog post ${Math.floor(Math.random() * 6) + 1}.svg`,
    },
  ]

function save(blog) {
    const lastIndex = data.length
    blog.id = lastIndex + 1
    data.push(blog)
    return blog
}

function findById(id) {
    return data.find(item => item.id === id) || null
}

function findAll() {
    return data
}

function update(id, updatedBlog) {
    const index = data.findIndex(item => item.id === id)
    if (index === -1) return null
    data[index] = { ...data[index], ...updatedBlog, id }
    return data[index]
}

function deleteById(id) {
    const index = data.findIndex(item => item.id === id)
    if (index === -1) return false
    data.splice(index, 1)
    return true
}

module.exports = {
    save,
    findById,
    findAll,
    update,
    deleteById
};