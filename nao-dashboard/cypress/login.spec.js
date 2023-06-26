describe('Login', () => {
    it('Permite iniciar sesión con éxito', () => {
      // Visita la página de inicio de sesión
      cy.visit('/login');
  
      // Ingresa el correo electrónico y la contraseña
      cy.get('input[name="email"]').type('user1@example.com');
      cy.get('input[name="password"]').type('password1');
  
      // Envía el formulario
      cy.get('button[type="submit"]').click();
  
      // Verifica que se haya iniciado sesión exitosamente
      cy.url().should('eq', 'https://tuapp.com/dashboard');
      cy.contains('¡Bienvenido!');
  
      // Cierra la sesión
      cy.get('button[data-testid="logout-button"]').click();
    });
  
    it('Muestra un mensaje de error en caso de credenciales inválidas', () => {
      // Visita la página de inicio de sesión
      cy.visit('/login');
  
      // Ingresa credenciales inválidas
      cy.get('input[name="email"]').type('usuario@example.com');
      cy.get('input[name="password"]').type('contraseñaIncorrecta');
  
      // Envía el formulario
      cy.get('button[type="submit"]').click();
  
      // Verifica que se muestre un mensaje de error
      cy.contains('Credenciales inválidas');
    });
  });
  