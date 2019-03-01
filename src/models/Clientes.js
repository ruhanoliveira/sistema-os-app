'use strict'

export class Clientes {

  constructor(
    razao_social = null,
    nome_fantasia = null,
    cnpj = null,
    cpf = null,
    inscricao_estadual = null,
    telefone_principal = null,
    fax = null,
    numero_licenca = null,
    ativo = true,
    prospeccao = 2,
    porcentagem_comissao_vendedor = null,
    pendencia = false,
    observacao = null,
    informacao_faturamento = null,
    rastreabilidade_mri = false,
    faturamento_mensal = false,
    contrato_manutencao = false,
    cliente_atividades_id = null,
    funcionarios_id = null,
    id = null
  ) {
    this.razao_social = razao_social
    this.nome_fantasia = nome_fantasia
    this.cnpj = cnpj
    this.cpf = cpf
    this.inscricao_estadual = inscricao_estadual
    this.telefone_principal = telefone_principal
    this.fax = fax
    this.numero_licenca = numero_licenca
    this.ativo = ativo ? 1: 2
    this.prospeccao = prospeccao ? 1: 2
    this.porcentagem_comissao_vendedor = porcentagem_comissao_vendedor
    this.pendencia = pendencia ? 1: 2
    this.observacao = observacao
    this.informacao_faturamento = informacao_faturamento
    this.rastreabilidade_mri = rastreabilidade_mri ? 1: 2
    this.faturamento_mensal = faturamento_mensal ? 1: 2
    this.contrato_manutencao = contrato_manutencao ? 1: 2
    this.cliente_atividades_id = cliente_atividades_id
    this.funcionarios_id = funcionarios_id
    this.id = id
  }
}