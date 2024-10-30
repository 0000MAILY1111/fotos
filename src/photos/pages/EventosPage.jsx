import React from 'react'
import { EventosList } from '../components/EventosList'


export const EventosPage = () => {
  return (
    <>
    <div>Pagina de Eventos</div>
    <h1>Descripcion de la pagina de eventos</h1>
    <h2>En esta pagina se muestran los eventos que se han realizado en la institucion</h2>
    <hr/>
    <EventosList publisher={'Eventos'}/>
    </>

    
  )
}
