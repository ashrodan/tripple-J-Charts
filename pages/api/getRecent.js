import { NowRequest, NowResponse } from '@now/node'

export default (req, res) => {
    res.json({ name: 'John', email: 'john@example.com' })
}