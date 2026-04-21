

import SectionExercise from '@/components/pages/exercise-lvc/page';
import { getExerciseData } from '@/utils/mock-data';

export default async function ExerciseLvcPage() {
  const data = await getExerciseData();
  return <SectionExercise data={data} />;
}
