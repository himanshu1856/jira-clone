import { useEffect, useState } from "react"
import Header from "./components/Header"
import InputModal from "./components/InputModal"
import TicketList from "./components/TicketList"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTicket, setNewTicket] = useState({})

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const getModalData = (ticketData) => {
    console.log(ticketData)
  }

  return (
    <main className="h-screen">
      <Header handleModal={handleModal}/>
      <TicketList/>
      {isModalOpen && <InputModal handleModal={handleModal} getModalData={getModalData} />}
    </main>
  )
}

export default App
