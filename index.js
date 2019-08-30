// Isso requer o compilador
new Vue({
    template: '<div>{{ hi }}</div>'
  })
  
  // Isso não requer
  new Vue({
    render: h => h('div', this.hi)
  })