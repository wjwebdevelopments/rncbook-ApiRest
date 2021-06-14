import { Router } from 'express';
const router = Router();


router.get('/', (req, res) => {
	res.send('List All Rnc');
})

export default router;