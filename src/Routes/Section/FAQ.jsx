import React from 'react'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ExpandMore, ExpandMoreOutlined } from '@mui/icons-material';






const FAQ = () => {
    return (
        <div className="faq-container">

            <div className="titulo">
                <h2>Preguntas Frecuentes</h2>
            </div>
            <div className="faq-content">
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>1. Luego de hacer la compra, ¿me lo envían directamente o me llaman previamente?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Te llamaremos en el termino de 24/48 hs para coordinar el envio.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>2. ¿Puedo enviar un servicio de mensajería? Tengo que llamar?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Si quieres pasar vos mismo a retirar o  enviar un servicio de mensajería , podes hacerlo seleccionando “Envio a Convenir” en el checkout. Te llamaremos nosotros cuando el pedido este listo.
                                Podés llamar al local una vez hecho el pedido (4811-6089) y aclarar si envías algún servicio de mensajería o bien si lo pasa a buscar otra persona, indicando en ambos casos el nombre completo y DNI de la persona que retira.
                                Sino, al momento en que se procesa su pedido, se te va a contactar para coordinar el envío.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>3. ¿Cuánto tardan en entregar los productos?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Dependiendo de la zona a donde se tenga que entregar el pedido. Si es en CABA, la demora es de entre 24 y 48 hs.
                                Si es por fuera de CABA, se envía por Correo Argentino o algún expreso, por lo que la entrega tardará entre 3 y 10 días, según la demanda del correo. En ese caso se te envía un número de seguimiento para que puedas seguir el estado  en la página del Correo y  puedas tener una idea de cuándo te lo entregarán. </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>4.  ¿Me tengo que loguear para poder comprar?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Aun no tenemos habilitada la opcion de logearse
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>5. ¿Tengo que crear una cuenta en el Checkout para que me deje comprar?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Por el momento se puede comprar como invitado, sin logearse
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>6. Si lo retiro en el local, ¿puedo pagar cuando lo retiro?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Sí, podés pagar cuando lo retirás, tanto en efectivo, tarjeta o con Mercado Pago. En éste caso tenés que  seleccionar la opcion "RETIRÁ EN UNO DE NUESTROS PUNTOS DE VENTA", indica la sucursal  correspondiente cercana a tu zona y seleccioná como método de pago "Transferencia Bancaria".
                                Aclarar en los comentarios que vas a abonar en el local.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>

            </div>
        </div>
    )
}

export default FAQ