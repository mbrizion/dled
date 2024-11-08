import { useState } from 'react'
import { cn } from '../utils/cn.js'
import { useTranslation } from 'react-i18next'

const Steps = ({ steps }) => {
  const { t } = useTranslation()
  const [hoveredStep, setHoveredStep] = useState(null)

  const handleMouseEnter = (stepId) => setHoveredStep(stepId)
  const handleMouseLeave = () => setHoveredStep(null)

  return (
    <div className="flex flex-col gap-6 w-full max-w-screen-md">
      {steps.map((step, index) => (
        <div
          key={step.id}
          id={step.id}
          className={cn(
            'rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center overflow-hidden bg-cover bg-center',
            hoveredStep === step.id
              ? 'bg-white shadow-xl min-h-60 h-fit'
              : 'h-52',
            hoveredStep && hoveredStep !== step.id
              ? 'opacity-50'
              : 'opacity-100',
          )}
          style={{ backgroundImage: `url(${step.image})` }}
          onMouseEnter={() => handleMouseEnter(step.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-black bg-opacity-40 p-6 w-full  flex flex-col items-center rounded-lg relative justify-center min-h-60 h-fit">
            {!hoveredStep && (
              <>
                <div className="absolute top-2 left-2 z-20 text-white font-semibold md:text-2xl text-lg">
                  {t('step') + ' ' + (index + 1)}
                </div>
                <h2 className="md:text-3xl font-semibold text-white text-lg">
                  {t(step.title)}
                </h2>
              </>
            )}
            <div
              className={cn(
                'mt-4 text-gray-200 text-center transition-opacity duration-300 ease-in-out delay-100',
                hoveredStep === step.id ? 'opacity-100' : 'opacity-0',
              )}
            >
              {hoveredStep === step.id && (
                <p className="font-semibold text-white text-md md:text-lg">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Steps
