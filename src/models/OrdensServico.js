'use strict'

export class OrdensServico {

  constructor(
    codigo_os = null,
    data_criacao = null,
    ordem_servico_tipos_id = null,
    funcionarios_id = null,
    clientes_id = null,
    transportadores_id = null,
    atracacao_id = null,
    atracacao_observacao = null,
    equipamentos_id = null,
    motorista_id = null,
    veiculos_id = null,
    residuos_id = null,
    residuo_quantidade = null,
    residuo_unidade = null,
    gerador_id = null,
    gerador_observacao = null,
    receptores_id = null,
    receptor_observacao = null,
    servico_observacao = null,
    empresa_terceirizada = null,
    id = null
  ) {
    this.codigo_os = codigo_os,
    this.data_criacao = data_criacao,
    this.ordem_servico_tipos_id = ordem_servico_tipos_id,
    this.funcionarios_id = funcionarios_id,
    this.clientes_id = clientes_id,
    this.transportadores_id = transportadores_id,
    this.atracacao_id = atracacao_id,
    this.atracacao_observacao = atracacao_observacao,
    this.equipamentos_id = equipamentos_id,
    this.motorista_id = motorista_id,
    this.veiculos_id = veiculos_id,
    this.residuos_id = residuos_id,
    this.residuo_quantidade = residuo_quantidade,
    this.residuo_unidade = residuo_unidade,
    this.gerador_id = gerador_id,
    this.gerador_observacao = gerador_observacao,
    this.receptores_id = receptores_id,
    this.receptor_observacao = receptor_observacao,
    this.servico_observacao = servico_observacao,
    this.empresa_terceirizada = empresa_terceirizada,
    this.id = id
  }
}

export class OrdensServicoBalanca {
  constructor (
    balanca_data_entrada = null,
    balanca_data_saida = null,
    balanca_hora_entrada = null,
    balanca_hora_saida = null,
    balanca_peso_entrada = null,
    balanca_peso_saida = null,
    balanca_unidade = null,
    balanca_peso_calculado = null,
    id = null
  ){
    this.balanca_data_entrada = balanca_data_entrada,
    this.balanca_data_saida = balanca_data_saida,
    this.balanca_hora_entrada = balanca_hora_entrada,
    this.balanca_hora_saida = balanca_hora_saida,
    this.balanca_peso_entrada = balanca_peso_entrada,
    this.balanca_peso_saida = balanca_peso_saida,
    this.balanca_unidade = balanca_unidade,
    this.balanca_peso_calculado = balanca_peso_calculado,
    this.id = id
  }
}

export class OrdensServicoPosExecucao {
  constructor (
    km_inicial = null,
    km_final = null,
    hora_inicio = null,
    hora_fim = null,
    comentarios = null,
    nota_fiscal_numero = null,
    id = null
  ) {
    this.km_inicial = km_inicial,
    this.km_final = km_final,
    this.hora_inicio = hora_inicio,
    this.hora_fim = hora_fim,
    this.comentarios = comentarios,
    this.nota_fiscal_numero = nota_fiscal_numero,
    this.id = id
  }
}