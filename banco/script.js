const banco = {
    numeroconta: '123456',
    saldo: 1000,
    tipoconta: 'corrente',
    agencia: '7890',
  
    buscarsaldo: function () {
      return this.saldo;
    },
  
    deposito: function (valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
      } else {
        return 'Por favor, insira um valor válido para depósito.';
      }
    },
  
    saque: function (valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
      } else {
        return 'Saldo insuficiente ou valor de saque inválido.';
      }
    },
  
    numerodaconta: function () {
      return this.numeroconta;
    }
  };
  
  console.log('Saldo Atual:', banco.buscarsaldo());
  console.log(banco.deposito(500));
  console.log(banco.saque(200));
  console.log('Número da Conta:', banco.numerodaconta());
  