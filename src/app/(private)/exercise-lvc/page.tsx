

import SectionExercise from '@/components/pages/exercise-lvc/index';
import { getAdminExerciseStatsAction, getAdminLVCStatsAction, getAdminReflectionsAction } from '@/utils/graphql/exercise-lvc/action';

const ExerciseLvcPage = async () => {

  const [lvcRes, exerciseRes, reflectionsRes] = await Promise.all([
    getAdminLVCStatsAction(),
    getAdminExerciseStatsAction(),
    getAdminReflectionsAction(),
  ]);

  const lvcData = lvcRes?.adminGetLVCStats || null;
  const exerciseData = exerciseRes?.adminGetExerciseStats || null;
  const reflectionsData = reflectionsRes?.adminGetReflections || null;

  return <SectionExercise
    lvcData={lvcData}
    reflectionsData={reflectionsData}
    exerciseData={exerciseData} />;
}

export default ExerciseLvcPage;
