import { render, waitFor, screen, configure } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import UserprofileList from "../../pages/UserprofileList"

describe('UserProfilelist component ', ()=>{
    it('should render users list api response', async ()=>{
        render(<UserprofileList/>, {wrapper: MemoryRouter})
        await waitFor(()=>{
            screen.getByText("Leanne Graham")
            screen.getByText("Clementine Bauch")
            const conta = container.getElementsByClassName('container');
            expect(conta.length).toBe(1);
        })
    })
})