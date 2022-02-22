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

describe('Testes para o renderPg1', () => {
    const request = {}
  
    const response = {
      render: jest.fn()    
    }
  
    const next = jest.fn();
  
    test('Deve renderizar a pagina de relacao de convocados', () => {
      subject.renderPg1(request, response, next);
  
      expect(response.render).toHaveBeenCalledWith('pg1', expect.objectContaining({test: 'pg1'}));
    })
})

describe('Testes para o renderPg3', () => {
    const request = {}
  
    const response = {
      render: jest.fn()    
    }
  
    const next = jest.fn();
  
    test('Deve renderizar a pagina de recados de extrema importancia', () => {
      subject.renderPg3(request, response, next);
  
      expect(response.render).toHaveBeenCalledWith('pg3', expect.objectContaining({test: 'pg3'}));
    })
})