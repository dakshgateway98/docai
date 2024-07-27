import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHomeUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ReviewComponent = () => {
  return (
    <section className="w-full flex justify-center py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container max-w-7xl grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Trusted by Medical Professionals
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear what our users have to say about their experience with DocAi.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 rounded-lg bg-background p-4 shadow-sm">
              <FontAwesomeIcon icon={faUser}  className='h-5 w-5 '/>
                <div className="space-y-2">
                  <div className="font-bold">Dr. Mahesh Patel</div>
                  <p className="text-muted-foreground">
                    "DocAi has revolutionized my medical reporting process.It will generate the report in the 
                    proper format."
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg bg-background p-4 shadow-sm">
                <FontAwesomeIcon icon={faUser}  className='h-5 w-5 '/>
                <div className="space-y-2">
                  <div className="font-bold">Dr. Michael Johnson</div>
                  <p className="text-muted-foreground">
                    "As a medical student, DocAi has been an invaluable tool for generating comprehensive reports. The
                    accuracy and attention to detail are truly impressive."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ReviewComponent