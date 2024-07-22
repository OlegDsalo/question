import express from 'express';
import QuestionsCtrl from '../controllers/questionsCtrl';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100
});

router.use(apiLimiter);

router.get('/questions', [], QuestionsCtrl.list);
router.post('/questions', [], QuestionsCtrl.create);
router.put('/questions/:id', [], QuestionsCtrl.update);
router.delete('/questions/:id', [], QuestionsCtrl.delete);

// TODO: add POST / PUT

export default router;
