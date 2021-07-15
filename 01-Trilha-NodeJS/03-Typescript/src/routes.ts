import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Prof.Dani",
    duration: 10
  });

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Prof.Diego"
  });

  return response.send();
}