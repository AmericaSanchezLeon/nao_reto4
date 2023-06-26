import { Table, Button, Badge, Checkbox, Mask } from "react-daisyui";

export default function Clientes() {
  return (
    <div class="p-8">
      <h2 class="p-2 underline decoration-violet-900	font-semibold text-lg">Clientes</h2>
      <div className="overflow-x-auto">
        <Table className="rounded-box">
          <Table.Head>
            <Checkbox />
            <span>Name</span>
            <span>Job</span>
            <span />
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                />
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
              <div>
                Zemlak, Daniel and Leannon
                <br />
                <Badge color="ghost" size="sm">
                  Desktop Support Technician
                </Badge>
              </div>
              <Button color="ghost" size="xs">
                details
              </Button>
            </Table.Row>

            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="http://daisyui.com/tailwind-css-component-profile-3@56w.png"
                />
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
              <div>
                Carrol Group
                <br />
                <Badge color="ghost" size="sm">
                  Tax Accountant
                </Badge>
              </div>
              <Button color="ghost" size="xs">
                details
              </Button>
            </Table.Row>

            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="http://daisyui.com/tailwind-css-component-profile-4@56w.png"
                />
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
              <div>
                Rowe-Schoen
                <br />
                <Badge color="ghost" size="sm">
                  Office Assistant I
                </Badge>
              </div>
              <Button color="ghost" size="xs">
                details
              </Button>
            </Table.Row>

            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="http://daisyui.com/tailwind-css-component-profile-5@56w.png"
                />
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
              <div>
                Wyman-Ledner
                <br />
                <Badge color="ghost" size="sm">
                  Community Outreach Specialist
                </Badge>
              </div>
              <Button color="ghost" size="xs">
                details
              </Button>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
