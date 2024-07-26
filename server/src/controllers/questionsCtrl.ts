import {Request, Response} from 'express';
import {QuestionsService} from '../services/questionsService';
import {IQuestion} from "../db/QuestionSchema";
const QuestionsCtrl = {

  list: (req: Request, res: Response) => {
      QuestionsService.getQuestions()
      .then((questions:any) => {
        res.status(200).send(questions);
      }).catch((e:any) => {
        console.error('Failed to get Questions', e);
        res.status(500).send();
    });

  },
  create: (req:Request, res:Response) => {
    const newQuestion = req.body;
    QuestionsService.addQuestion(newQuestion)
        .then(question => res.status(201).send(question))
        .catch(e => {
          console.error('Failed to create question', e);
          res.status(500).send();
        });
  },

  update: (req:Request, res:Response) => {
      const id = req.params.id;
      const updatedQuestion: Partial<IQuestion> = req.body;
    QuestionsService.updateQuestion(id, updatedQuestion)
        .then(question => res.status(200).send(question))
        .catch(e => {
          console.error('Failed to update question', e);
          res.status(500).send();
        });
  },

  delete: (req:Request, res:Response) => {
    const id = req.params.id;
    QuestionsService.deleteQuestion(id)
        .then(() => res.status(204).send())
        .catch(e => {
          console.error('Failed to delete question', e);
          res.status(500).send();
        });
  }
};



export default QuestionsCtrl;
