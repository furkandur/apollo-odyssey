import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel, ModuleModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getTrack(trackID: string) {
    return this.get<TrackModel>(`track/${trackID}`);
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }

  getTrackModules(trackID: string) {
    return this.get<ModuleModel[]>(`track/${trackID}/modules`);
  }
}
