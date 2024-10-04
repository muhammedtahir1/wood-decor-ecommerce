import React from 'react'

const page = () => {
  return (
    <>
      <div className="mt-20 max-w-3xl mx-auto p-6  rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold mb-4">Warranty Policy Overview</h2>

        <h3 className="text-xl font-semibold mb-2">Warranty Period</h3>
        <p className="mb-4">
          The warranty begins on the purchase date and is specified on the product detail page.
        </p>

        <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Non-transferable.</li>
          <li>A valid invoice must be presented upon request.</li>
          <li>Alterations or modifications void the warranty.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Exclusions</h3>
        <p className="mb-2">The warranty does not apply if:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Defects fall within acceptable industry variances (e.g., up to 4% movement in fabrics).</li>
          <li>The product is used outside its intended purpose.</li>
          <li>Improper cleaning, use, or maintenance occurs.</li>
          <li>The product is subjected to abnormal environmental conditions (e.g., extreme temperatures, humidity, etc.).</li>
          <li>Damage arises from abuse, misuse, neglect, or accidents.</li>
          <li>Damage is caused by chemical exposure.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Additional Limitations</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Normal wear and tear are not covered.</li>
          <li>After treatments that cause damage or defects are excluded.</li>
          <li>Minor color variations are not covered.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Note</h3>
        <p>
          Variations in fabric color and wood finish may occur due to screen differences. Acceptable dimensional mismatches are up to 12mm for upholstered products and up to 6mm for non-upholstered products.
        </p>
      </div>

    </>
  )
}

export default page