import { render, screen } from '@testing-library/react'
import { UserAccount } from '../../src/components/UserAccount'


describe('UserAccount', () => {
    it('should render name', () => {
        render(<UserAccount user={{id:123,name:"name1"}}/>)
        screen.debug()
        expect(screen.getByText(/name1/)).toBeInTheDocument()
    })

    it('should render edit button if user is admin', () => {
        render(<UserAccount user={{id:123,name:"name1",isAdmin:true}}/>)
        screen.debug()
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/edit/i)
    })

    it('should not render edit button if user is not admin', () => {
        render(<UserAccount user={{id:123,name:"name1"}}/>)
        screen.debug()
        const button = screen.queryByRole("button")
        expect(button).not.toBeInTheDocument()
    })
})