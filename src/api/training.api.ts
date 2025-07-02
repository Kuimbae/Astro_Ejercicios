import client from "@/lib/client";
import type { Training, TrainingWithLessons, Lesson } from "./model";

export async function getTraining(): Promise<TrainingWithLessons[]> {
    const trainings = await client.getContentList<Training>({ contentType: "training" });

    const TrainingWithLessons = Promise.all(
        trainings.map(async (training) => {
            const lessons = await getLessons(training.lessons);
            return {
                ...training,
                lessons: lessons
            };
        }),
    );
    return TrainingWithLessons;
}

export const getLessons = (ids: string[]): Promise<Lesson[]> =>
    client.getContentList<Lesson>({
        contentType: "lesson",
        id: { in: ids }
    });
