import React, { useContext } from 'react'
import { FormPreviewContext } from '../../context/FormContext'

function PreviewForm() {
  const {previewText} = useContext(FormPreviewContext)

  return (
    <div>
        {/* Preview */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold mb-2">Preview:</h3>
          <div className="bg-gray-50 p-4 rounded-md shadow-md space-y-2">
            <h1>{previewText.projectName ||"AI Resume Build "}</h1>
          </div>
        </div>
      </div>
  )
}

export default PreviewForm