'use client';

import { AllExerciseResponse, AllLVCResponse, AllReflectionsResponse } from '@/types/exercise-lvc';
import LvcStat from './lvc-stat';
import ExerciseCompletionCounts from './exercise-completion-counts';
import ReflectionsCard from './reflections-card';
import EngagementHealth from './engagement-health';
import AnonymousLearnings from './anonymous-learnings-card';

interface SectionExerciseProps {
  lvcData: AllLVCResponse | null;
  reflectionsData: AllReflectionsResponse | null;
  exerciseData: AllExerciseResponse | null;
}

const SectionExercise = ({ lvcData, reflectionsData, exerciseData }: SectionExerciseProps) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <LvcStat lvcData={lvcData} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <ExerciseCompletionCounts exerciseData={exerciseData} />
        <ReflectionsCard reflectionsData={reflectionsData} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <EngagementHealth exerciseData={exerciseData} />

        {
          reflectionsData ? (
            <AnonymousLearnings reflectionsData={reflectionsData} />
          ) : (
            <div style={{ padding: 20 }}>No data available</div>
          )
        }

      </div>
    </div >
  );
}


export default SectionExercise;