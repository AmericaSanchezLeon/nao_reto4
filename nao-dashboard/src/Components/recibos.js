import { Table } from 'react-daisyui'


export default function Recibos() {

  return (
    <div className='p-8'>
      <div className='overflow-x-auto'>
      <h2 class="p-2 underline decoration-violet-900	font-semibold text-lg">Recibos</h2>

        <Table >
          <Table.Head>
            <span />
            <span>Name</span>
            <span>Job</span>
            <span>Company</span>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <span>1</span>
              <span>Cy Ganderton</span>
              <span>Quality Control Specialist</span>
              <span>Disney</span>
            </Table.Row>

            <Table.Row>
              <span>2</span>
              <span>Hart Hagerty</span>
              <span>Desktop Support Technician</span>
              <span>Netflix</span>
            </Table.Row>

            <Table.Row>
              <span>3</span>
              <span>Brice Swyre</span>
              <span>Tax Accountant</span>
              <span>Amazon</span>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>


    </div>
  )

}