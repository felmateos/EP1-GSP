const subject = require('./homeController')

describe('Testes para o renderHome', () => {
  const request = {}

  const response = {
    render: jest.fn()    
  }

  const next = jest.fn();

  test('Deve renderizar a pagina inicial', () => {
    subject.renderHome(request, response, next);

    expect(response.render).toHaveBeenCalledWith('index', expect.objectContaining({algo: 'oi'}));
  })
})