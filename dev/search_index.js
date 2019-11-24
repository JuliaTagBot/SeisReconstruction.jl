var documenterSearchIndex = {"docs":
[{"location":"lib/public/#Public-documentation-1","page":"Public","title":"Public documentation","text":"","category":"section"},{"location":"lib/public/#","page":"Public","title":"Public","text":"Documentation for public SeisProcessing.jl public interface","category":"page"},{"location":"lib/public/#Public-interface-1","page":"Public","title":"Public interface","text":"","category":"section"},{"location":"lib/public/#","page":"Public","title":"Public","text":"SeisPOCS\nSeisReconstruction.CalculateSampling\nSeisReconstruction.ConjugateGradients\nSeisReconstruction.DotTest\nSeisReconstruction.IRLS","category":"page"},{"location":"lib/public/#SeisReconstruction.SeisPOCS","page":"Public","title":"SeisReconstruction.SeisPOCS","text":"SeisPOCS(in;<keyword arguments>)\n\nProjection Onto Convex Sets interpolation of seismic records.\n\nArguments\n\nin: input data that can have up to 5 dimensions. Time is in the first dimension.\np=1. : exponent for thresholding (1 is equivalent to soft thres. high number is equivalent to hard thresholding)\nalpha=1 : add-back ratio for imputation step. Use 1 for noise free data, and < 1 for denoising of original traces.\ndt=0.001 : sampling rate along the time axis (in seconds)\nfmax=99999. : maximum temporal frequency to process.\npadt=2 : padding in the time axis, first dimension.\npadx=1 : padding in the spatial axes. (Dim 2 to 5).\nNiter=100 : number of iterations\nalpha=1\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisReconstruction.CalculateSampling","page":"Public","title":"SeisReconstruction.CalculateSampling","text":"CalculateSampling(in)\n\nCalculate the sampling operator of an n-dimension input. The output has the same size as the input. \n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisReconstruction.ConjugateGradients","page":"Public","title":"SeisReconstruction.ConjugateGradients","text":"ConjugateGradients(d,operators,parameters;<keyword arguments>)\n\nConjugate Gradients following Algorithm 2 from Scales, 1987. The user provides an array of linear operators. Verify that linear operator(s) pass the dot product. See also: DotTest\n\nArguments\n\nNiter=10 : Number of iterations\nmu=0\ntol=1.0e-15\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisReconstruction.DotTest","page":"Public","title":"SeisReconstruction.DotTest","text":"DotTest(m_rand,d_rand,operators,parameters)\n\nDot product test for a vector of linear operators See also: ConjugateGradients\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#SeisReconstruction.IRLS","page":"Public","title":"SeisReconstruction.IRLS","text":"IRLS(d,operators,parameters;<keyword arguments>)\n\nNon-quadratic regularization with Iteratively Reweighted Least Squares (IRLS).\n\nArguments\n\nNiter_external=3\n'Niter_internal=10'\nmu=0\n\n\n\n\n\n","category":"function"},{"location":"#SeisReconstruction.jl-1","page":"Home","title":"SeisReconstruction.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Reconstruction tools for SeismicJulia project","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"SeisReconstruction, from the SeismicJulia project, can be installed using Julia package manager From the Julia REPL, type ] to enter the Pkg REPL mode and run ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pkg> add SeisReconstruction","category":"page"}]
}
