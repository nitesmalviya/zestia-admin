

import SectionExercise from '@/components/pages/exercise-lvc/index';
import { getAdminExerciseStatsAction, getAdminLVCStatsAction, getAdminReflectionsAction } from '@/utils/graphql/exercise-lvc/action';

const ExerciseLvcPage = async () => {
  const res = await getAdminLVCStatsAction();
  const lvcData = res?.adminGetLVCStats || null;

  const exerciseRes = await getAdminExerciseStatsAction();
  const exerciseData = exerciseRes?.adminGetExerciseStats || null;

  const reflectionsRes = await getAdminReflectionsAction()
  const reflectionsData = reflectionsRes?.adminGetReflections || null;

  return <SectionExercise
    lvcData={lvcData}
    reflectionsData={reflectionsData}
    exerciseData={exerciseData} />;
}

export default ExerciseLvcPage;
