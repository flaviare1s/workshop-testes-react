import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from './page'

describe('Page', () => {
    it('check correct answer', async () => {
        const user = userEvent.setup()

        render(<Page />)

        const input = screen.getByLabelText("What is Batman's real name?")
        await user.type(input, 'Bruce Wayne')

        const button = screen.getByRole('button', { name: 'Submit Answer'})
        await user.click(button)

        expect(screen.getByText('Correct!')).toBeInTheDocument

        screen.debug()
    })
})