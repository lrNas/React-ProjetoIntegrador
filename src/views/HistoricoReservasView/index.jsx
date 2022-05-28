import { React, Component, useEffect } from "react";
import PageConstructor from "../../Components/PageConstructor";
import HistoricoReservas from "../../Components/HistoricoReservas";

export default function HistoricoReservasView() {

    return (
      <PageConstructor>
        <main className="section">
          <h1>Histórico de Reservas</h1>
          <HistoricoReservas />
        </main>
      </PageConstructor>
    )

  }

