

import SectionExercise from '@/components/pages/exercise-lvc/index';
import { getAdminExerciseStatsAction, getAdminLVCStatsAction, getAdminReflectionsAction } from '@/utils/graphql/exercise-lvc/action';
export const dynamic = 'force-dynamic';

const ExerciseLvcPage = async () => {

  const results = await Promise.all([
    getAdminLVCStatsAction(),
    getAdminExerciseStatsAction(),
    getAdminReflectionsAction(),
  ]);

  const [lvcRes, exerciseRes, reflectionsRes] = results;

  const lvcData = lvcRes?.adminGetLVCStats || null;
  const exerciseData = exerciseRes?.adminGetExerciseStats || null;
  const reflectionsData = reflectionsRes?.adminGetReflections || null;

  return <SectionExercise
    lvcData={lvcData}
    reflectionsData={reflectionsData}
    exerciseData={exerciseData} />;
}

export default ExerciseLvcPage;
