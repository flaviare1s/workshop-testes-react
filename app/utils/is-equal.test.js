import { isEqual } from './is-equal'

describe('isEqual', () => {
    it('should return true', () => {
        const result = isEqual(7,7)
        expect(result).toBe(true)
    })

    it('should return false', () => {
        const result = isEqual('7', 7)
        expect(result).toBe(false)
    })

    it('should return true', () => {
        expect({}).toEqual({})
    })
})







