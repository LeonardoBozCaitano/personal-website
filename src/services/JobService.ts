import { Job } from "../entities/Job";

import philipsIcon from '../assets/images/philips.png';
import projurisIcon from '../assets/images/projuris.png';
import seniorIcon from '../assets/images/senior.png';
import abaseIcon from '../assets/images/abase.png';

export class JobService {
    public getJobs(): Job[] {
        return [
            {
                company: "Projuris Software Juridico",
                image: projurisIcon,
                description: "Trabalhando no time de tecnologia, analisando, desenvolvendo e monitorando microserviços utilizando Java com spring e conceitos de Rest. Participando da migração do sistema atual para o novo.",
            }, {
                company: "Senior Sistemas",
                image: seniorIcon,
                description: "Desenvolvimento de projetos para um sistema de gestão de pessoas. Utilizando tecnologias e conceitos modernos como Java com Spring, Angular, Postgres, e diversos serviços da Amazon. Em uma equipe unida, aplicando fortemente metodologias ágeis.",
            }, {
                company: "Philips Clinical Informatics",
                image: philipsIcon,
                description: "Desenvolvedor em um sistema para gestão hospitalar. Vasta experiência com banco de dados relacional utilizando o Oracle PL/SQL. Desenvolvimento Web com Java e Angular. Em projetos como a criação de um sistema de comunicação entre operadoras de plano de saúde.",
            }, {
                company: "Abase Sistemas",
                image: abaseIcon,
                description: "Desenvolvimento em um sistema para gestão de escolas públicas. Utilizando tecnologias como o C# .NET com NHibernate, JavaScript com o framework ExtJS e Postgres. Experiência com desenvolvimento de relatórios no IReport.",
            }
        ]
    }
}