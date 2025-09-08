import { Request, Response } from "express";
import { sendEmail } from "../services/emailService";

export function sendReportEmail(req: Request, res: Response): Promise<void> {
  try {
    const licitacoes = [
      {
        titulo: "Aquisição de Bússolas",
        descricao: "Compra de 100 bússolas para escolas públicas.",
        link: "https://pncp.gov.br/licitacao/12345",
      },
      {
        titulo: "Fornecimento de Material de Escritório",
        descricao: "Licitação para suprimentos de papelaria em Porto Alegre - RS.",
        link: "https://pncp.gov.br/licitacao/67890",
      },
    ];

    const { to, subject } = req.body;

    if (!to || !subject) {
      res.status(400).json({
        message: "É necessário informar 'to' (destinatário) e 'subject'.",
      });
    }

    const info = sendEmail(to, subject, licitacoes);

    res.status(200).json({
      message: "Email enviado com sucesso!",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("❌ Erro no controller de envio de email:", error);
    res.status(500).json({
      message: "Erro ao enviar email",
      error,
    });
  }
};
