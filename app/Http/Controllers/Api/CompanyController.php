<?php
/**
 we create a Controller, with a few flags (https://twitter.com/PovilasKorop/status/1444611193956622337) to generate exactly what we need:

php artisan make:controller Api/CompanyController --resource --api --model=Company

--resource            generates empty methods
--model=Company       Route model binding
--api                 no need for methods create(), edit()

controller using CompanyResource, CompanyRequest
 */
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Models\Company;

class CompanyController extends Controller
{
    public function index()
    {
        return CompanyResource::collection(Company::all());
    }

    public function store(CompanyRequest $request)
    {
        $company = Company::create($request->validated());

        return new CompanyResource($company);
    }

    public function show(Company $company)
    {
        return new CompanyResource($company);
    }

    public function update(CompanyRequest $request, Company $company)
    {
        $company->update($request->validated());

        return new CompanyResource($company);
    }

    public function destroy(Company $company)
    {
        $company->delete();

        return response()->noContent();
    }
}
