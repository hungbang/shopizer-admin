import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/services/crud.service';
import { StorageService } from '../../../shared/services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private crudService: CrudService,
    private storageService: StorageService,
  ) {
  }

  getListOfCategories(params?): Observable<any> {
    return this.crudService.get(`/v1/category`, params);
  }

  getCategoryById(id): Observable<any> {
    const params = {
      lang: '_all'
    };
    return this.crudService.get(`/v1/category/${id}`, params);
  }

  getCategoryByProductId(id): Observable<any> {
    const params = {
      store: this.storageService.getMerchant(),
      lang: this.storageService.getLanguage()
    };
    return this.crudService.get(`/v1/category/product/${id}`, params);
  }

  addCategory(category): Observable<any> {
    const action = '/v1/private/category' + '?store=' + category.store + '&lang=' + category.selectedLanguage;
    return this.crudService.post(action, category);
  }

  updateCategory(id, category): Observable<any> {
    const action = `/v1/private/category/${id}` + '?store=' + category.store + '&lang=' + category.selectedLanguage;
    return this.crudService.put(action, category);
  }

  updateCategoryVisibility(category): Observable<any> {
    return this.crudService.patch(`/v1/private/category/${category.id}/visible`, category);
  }

  deleteCategory(id): Observable<any> {
    return this.crudService.delete(`/v1/private/category/${id}`);
  }

  checkCategoryCode(code): Observable<any> {
    const params = {
      'code': code,
    };
    return this.crudService.get(`/v1/private/category/unique`, params);
  }

  updateHierarchy(childId, parentId): Observable<any> {
    return this.crudService.put(`/v1/private/category/${childId}/move/${parentId}`, {});
  }

  filterCategory(data): Observable<any> {
    return this.crudService.get(`/v1/category?count=${data.count}&page=${data.page}&name=${data.name}`);
  }

}
