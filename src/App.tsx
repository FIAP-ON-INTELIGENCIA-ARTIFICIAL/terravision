import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Scan, BarChart3, Monitor, Bone as Drone, MapPin, Leaf, Target, Zap, Globe, ArrowRight, FileText, Users, Award } from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const technologies = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Inteligência Artificial",
      description: "Algoritmos de machine learning para análise automatizada de dados geológicos e identificação de padrões espectrais"
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Sensores Hiperespectrais",
      description: "Captação de dados espectrais de alta resolução em 200+ bandas para identificação mineral precisa"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Otimização Bayesiana",
      description: "Algoritmos avançados para otimização de rotas de voo e análise estatística de dados coletados"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Dashboards Inteligentes",
      description: "Visualização em tempo real dos dados coletados com análises geradas automaticamente"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white border-b-4 border-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Scientific Header */}
            <motion.div 
              className="border-2 border-black p-8 mb-12 bg-gray-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif">
                INTELIGÊNCIA ARTIFICIAL E DRONES
                <span className="block text-3xl md:text-5xl mt-2 border-t-2 border-black pt-4">
                  PARA PROSPECÇÃO DE TERRAS RARAS
                </span>
              </h1>
              
              <div className="border-t border-b border-black py-4 my-6">
                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-mono">
                  Desenvolvimento de metodologia inovadora utilizando sensoriamento remoto hiperespectral 
                  e algoritmos de machine learning para identificação de depósitos minerais em Minaçu-GO
                </p>
              </div>
              
              <div className="text-sm font-mono text-gray-600 mb-8">
                LOCAL: MINAÇU, GOIÁS | ÁREA: 15.000 HECTARES | STATUS: EM DESENVOLVIMENTO
              </div>
            </motion.div>
            
            <motion.button 
              className="border-2 border-black bg-black text-white px-12 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ACESSAR DOCUMENTAÇÃO
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Resumo Executivo */}
      <section className="py-20 bg-gray-50 border-b-2 border-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <div className="inline-block border-2 border-black bg-white px-6 py-2 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold font-serif">RESUMO EXECUTIVO</h2>
              </div>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            </motion.div>
            
            <motion.div 
              className="bg-white border-2 border-black p-12 mb-12"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-serif">OBJETIVO</h3>
                  <p className="text-gray-700 font-mono text-sm">
                    Desenvolver metodologia inovadora para prospecção mineral utilizando IA e sensoriamento remoto
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-serif">EQUIPE</h3>
                  <p className="text-gray-700 font-mono text-sm">
                    Pesquisadores especializados em geologia, IA, sensoriamento remoto e análise de dados
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-serif">IMPACTO</h3>
                  <p className="text-gray-700 font-mono text-sm">
                    Revolução na eficiência e sustentabilidade da prospecção mineral no Brasil
                  </p>
                </div>
              </div>
              
              <div className="border-t-2 border-black pt-8">
                <p className="text-lg leading-relaxed font-mono text-justify">
                  Este projeto propõe uma abordagem revolucionária para a prospecção de terras raras, 
                  combinando tecnologias de ponta em inteligência artificial e sensoriamento remoto. Utilizando drones equipados 
                  com sensores hiperespectrais e algoritmos avançados de machine learning, desenvolvemos uma metodologia que 
                  permite identificar e mapear depósitos minerais com precisão sem precedentes, reduzindo significativamente 
                  os custos operacionais e o impacto ambiental das atividades de prospecção tradicional.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-white border-2 border-black p-8 hover:bg-gray-50 transition-colors"
                variants={fadeInUp}
              >
                <div className="border-b border-black pb-4 mb-4">
                  <Target className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold font-serif">PRECISÃO</h3>
                </div>
                <p className="text-gray-700 font-mono text-sm">
                  Identificação precisa de terras raras com tecnologia hiperespectral de 200+ bandas espectrais
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white border-2 border-black p-8 hover:bg-gray-50 transition-colors"
                variants={fadeInUp}
              >
                <div className="border-b border-black pb-4 mb-4">
                  <Zap className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold font-serif">EFICIÊNCIA</h3>
                </div>
                <p className="text-gray-700 font-mono text-sm">
                  Redução de 70% no tempo de prospecção e 60% nos custos operacionais comparado aos métodos tradicionais
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white border-2 border-black p-8 hover:bg-gray-50 transition-colors"
                variants={fadeInUp}
              >
                <div className="border-b border-black pb-4 mb-4">
                  <Leaf className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold font-serif">SUSTENTABILIDADE</h3>
                </div>
                <p className="text-gray-700 font-mono text-sm">
                  Abordagem não invasiva que preserva 100% da cobertura vegetal e ecossistemas locais
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metodologia e Tecnologias */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border-2 border-black bg-gray-50 px-6 py-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">METODOLOGIA E TECNOLOGIAS</h2>
            </div>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto font-mono">
              Integração de tecnologias de ponta para criar uma solução completa e inovadora de prospecção mineral
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 border-2 border-black p-8 hover:bg-white transition-colors group"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4">
                  <div className="border border-black p-3 bg-white group-hover:bg-black group-hover:text-white transition-colors">
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 font-serif border-b border-black pb-2">
                      {tech.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-mono text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Especificações Técnicas - Drones */}
      <section className="py-20 bg-gray-50 border-b-2 border-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white border-4 border-black p-12">
                <div className="text-center mb-8">
                  <div className="inline-block border-2 border-black bg-gray-50 px-4 py-1 mb-4">
                    <span className="font-mono text-sm font-bold">ESPECIFICAÇÕES TÉCNICAS</span>
                  </div>
                  <img src="drone.png" alt="Drone Multirotor Especializado" className="w-full h-64 object-cover border-2 border-black mb-4" />
                  <h3 className="text-2xl font-bold font-serif mb-4">DRONE MULTIROTOR ESPECIALIZADO</h3>
                  <p>DJI Matrice 300 RTK modificado</p>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-bold">AUTONOMIA DE VOO:</span>
                    <span>45 MINUTOS</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-bold">ALTITUDE MÁXIMA:</span>
                    <span>500 METROS</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-bold">RESOLUÇÃO ESPACIAL:</span>
                    <span>0.5 M/PIXEL</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-bold">BANDAS ESPECTRAIS:</span>
                    <span>400-1000 NM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-bold">PRECISÃO GPS:</span>
                    <span>± 2 CM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">PESO TOTAL:</span>
                    <span>4.2 KG</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block border-2 border-black bg-white px-6 py-2 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-serif">PLATAFORMA AÉREA</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-mono">
                Nossa plataforma aérea multirotor foi especialmente configurada para operações de sensoriamento remoto 
                hiperespectral, incorporando sistemas de estabilização avançados e navegação autônoma de alta precisão.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white border-2 border-black p-6">
                  <div className="flex items-start gap-4">
                    <div className="border border-black p-2 bg-gray-50">
                      <Scan className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 font-serif">SENSOR HIPERESPECTRAL</h4>
                      <p className="text-gray-700 font-mono text-sm">
                        Captura simultânea em 200+ bandas espectrais (400-1000nm) com resolução radiométrica de 12 bits
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-black p-6">
                  <div className="flex items-start gap-4">
                    <div className="border border-black p-2 bg-gray-50">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 font-serif">SISTEMA DE NAVEGAÇÃO</h4>
                      <p className="text-gray-700 font-mono text-sm">
                        GPS RTK com precisão centimétrica e sistema de navegação autônoma com planejamento de missão
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-black p-6">
                  <div className="flex items-start gap-4">
                    <div className="border border-black p-2 bg-gray-50">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 font-serif">PROCESSAMENTO EMBARCADO</h4>
                      <p className="text-gray-700 font-mono text-sm">
                        Unidade de processamento embarcada para análise preliminar e controle de qualidade em tempo real
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Área de Estudo */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border-2 border-black bg-gray-50 px-6 py-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">ÁREA DE ESTUDO</h2>
            </div>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto font-mono">
              Caracterização geológica e geográfica da região de prospecção em Minaçu, Estado de Goiás
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 border-4 border-black p-8">
                <div className="bg-white border-2 border-black p-6 mb-6">
                  <img 
                    src="minacu.png" 
                    alt="Vista aérea de Minaçu-GO" 
                    className="w-full h-64 object-cover border-2 border-black mb-4"
                  />
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPin className="w-6 h-6" />
                      <h3 className="text-xl font-bold font-serif">MINAÇU, GOIÁS</h3>
                    </div>
                    <div className="font-mono text-sm text-gray-600">
                      COORDENADAS: 13°32'S, 48°33'W
                    </div>
                  </div>
                </div>
                
                <div className="bg-black text-white p-4 text-center">
                  <div className="font-mono font-bold">ÁREA TOTAL DE PROSPECÇÃO</div>
                  <div className="text-2xl font-bold">15.000 HECTARES</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block border-2 border-black bg-gray-50 px-6 py-2 mb-8">
                <h3 className="text-2xl font-bold font-serif">CARACTERÍSTICAS GEOLÓGICAS</h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-mono">
                A região de Minaçu apresenta características geológicas excepcionais para a ocorrência de elementos 
                de terras raras, com formações rochosas ígneas e metamórficas que favorecem a concentração destes minerais estratégicos.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 border-2 border-black p-4">
                  <h4 className="font-bold font-serif text-lg mb-2">COORDENADAS</h4>
                  <p className="font-mono text-sm">13°32'S, 48°33'W</p>
                </div>
                <div className="bg-gray-50 border-2 border-black p-4">
                  <h4 className="font-bold font-serif text-lg mb-2">ALTITUDE</h4>
                  <p className="font-mono text-sm">400-800 METROS</p>
                </div>
                <div className="bg-gray-50 border-2 border-black p-4">
                  <h4 className="font-bold font-serif text-lg mb-2">CLIMA</h4>
                  <p className="font-mono text-sm">TROPICAL SEMIÚMIDO</p>
                </div>
                <div className="bg-gray-50 border-2 border-black p-4">
                  <h4 className="font-bold font-serif text-lg mb-2">GEOLOGIA</h4>
                  <p className="font-mono text-sm">ROCHAS ÍGNEAS</p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-black p-6">
                <h4 className="font-bold font-serif text-lg mb-4 border-b border-black pb-2">JUSTIFICATIVA DA ESCOLHA</h4>
                <ul className="space-y-2 font-mono text-sm text-gray-700">
                  <li>• Presença confirmada de mineralizações de terras raras</li>
                  <li>• Formações geológicas favoráveis (complexos alcalinos)</li>
                  <li>• Acessibilidade para operações de drone</li>
                  <li>• Baixa densidade populacional</li>
                  <li>• Interesse econômico estratégico nacional</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aspectos Ambientais e ESG */}
      <section className="py-20 bg-gray-50 border-b-2 border-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="inline-block border-2 border-black bg-white px-6 py-2 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold font-serif">ASPECTOS AMBIENTAIS E ESG</h2>
              </div>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto font-mono">
                Compromisso com práticas sustentáveis e responsabilidade socioambiental em todas as etapas do projeto
              </p>
            </div>
            
            <div className="bg-white border-4 border-black p-12 mb-12">
              <div className="text-center mb-8">
                <Leaf className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-serif">METODOLOGIA NÃO INVASIVA</h3>
              </div>
              <p className="text-lg leading-relaxed font-mono text-center text-gray-700">
                Nossa abordagem de prospecção por sensoriamento remoto elimina completamente a necessidade de 
                intervenções físicas no terreno, preservando integralmente a cobertura vegetal, fauna local e 
                recursos hídricos da região de estudo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white border-2 border-black p-8 hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 border-2 border-black bg-gray-50 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">ENVIRONMENTAL</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm text-gray-700">
                  <li>• Zero impacto na cobertura vegetal</li>
                  <li>• Preservação da fauna local</li>
                  <li>• Não alteração de cursos d'água</li>
                  <li>• Ausência de ruído significativo</li>
                  <li>• Monitoramento ambiental contínuo</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white border-2 border-black p-8 hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 border-2 border-black bg-gray-50 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">SOCIAL</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm text-gray-700">
                  <li>• Engajamento com comunidades locais</li>
                  <li>• Capacitação técnica regional</li>
                  <li>• Geração de conhecimento científico</li>
                  <li>• Transparência nos processos</li>
                  <li>• Desenvolvimento tecnológico nacional</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white border-2 border-black p-8 hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 border-2 border-black bg-gray-50 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">GOVERNANCE</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm text-gray-700">
                  <li>• Conformidade regulatória total</li>
                  <li>• Metodologia científica rigorosa</li>
                  <li>• Documentação completa</li>
                  <li>• Auditabilidade dos processos</li>
                  <li>• Publicação de resultados</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-4 border-white p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
                ACOMPANHE O DESENVOLVIMENTO
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-xl mb-12 font-mono">
                Participe desta revolução tecnológica que está redefinindo o futuro da prospecção mineral no Brasil. 
                Acompanhe nossos avanços científicos, descobertas e o impacto positivo que estamos gerando para a sociedade.
              </p>
              
              <motion.button 
                className="border-4 border-white bg-white text-black px-12 py-6 font-bold text-xl hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-3 mx-auto group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ACESSAR RELATÓRIOS TÉCNICOS
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-black py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-2 border-black bg-gray-50 p-6 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 font-serif">
                  PROJETO DE PROSPECÇÃO MINERAL
                </h3>
                <p className="text-gray-700 font-mono text-sm">
                  INTELIGÊNCIA ARTIFICIAL E DRONES PARA PROSPECÇÃO DE TERRAS RARAS EM MINAÇU-GO
                </p>
              </div>
            </motion.div>
            
            <div className="border-t-2 border-black pt-8">
              <p className="text-gray-600 font-mono text-sm">
                © 2025 PROJETO IA E DRONES | DESENVOLVIDO COM METODOLOGIA CIENTÍFICA RIGOROSA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;