import {render,screen} from "@testing-library/react"
import { Greet } from '../../src/components/greet/greet'

describe('Greet', () => {
    it('Render hello with name when name is provided',() => {
        render(<Greet name="Name"/>)
        screen.debug()
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/hello/i)
    })

    it('Render login button when name is not provided',() => {
        render(<Greet/>)
        screen.debug()
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)
    })
})