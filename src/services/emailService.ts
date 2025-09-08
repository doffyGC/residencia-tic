import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.SMTP_HOST,
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS, 
  },
});

export const sendEmail = async (
  to: string,
  subject: string,
  licitacoes: { titulo: string; descricao: string; link: string }[]
) => {
  try {
    const htmlBody = `
      <h2>📢 Relatório de Licitações Encontradas</h2>
      <p>Olá, encontramos novas licitações de acordo com seus filtros:</p>
      <ul>
        ${licitacoes
          .map(
            (l) => `
          <li>
            <strong>${l.titulo}</strong><br/>
            ${l.descricao}<br/>
            <a href="${l.link}">Acessar licitação</a>
          </li>
        `
          )
          .join("")}
      </ul>
      <p>Atenciosamente,<br/>Equipe do Sistema de Monitoramento</p>
    `;

    const mailOptions = {
      from: `"Sistema de Licitações" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email enviado com sucesso:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Erro ao enviar email:", err);
    throw err;
  }
};