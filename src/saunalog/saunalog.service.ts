import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Saunalog } from "src/entities/saunalog.entity";
import { Repository } from "typeorm";

@Injectable()
export class SaunalogService {
  constructor(
    @InjectRepository(Saunalog)
    private readonly saunalogRepository: Repository<Saunalog>,
  ) {}

  //自分が投稿したい要素(entityで指定した要素)を引数で記載する
  store(name: string, area: string, rank: number, comment: string) {
    //Entityファイル内のClassのオブジェクトを作成して変数に格納
    const saunalog = new Saunalog();
    //オブジェクトの中身は空なので、上の引数で指定した要素を中身に格納する
    saunalog.name = name;
    saunalog.area = area;
    saunalog.rank = rank;
    saunalog.comment = comment;
    //サウナログテーブルにデータを保存Mする処理
    return this.saunalogRepository.save(saunalog);
  }

  //データ一覧を表示させる処理
  get() {
    return this.saunalogRepository.find();
  }
 
  async update(id, name: string, area: string, rank: number, comment: string) {
    const saunalog = await this.saunalogRepository.findOne(id);  
    saunalog.name = name;
    saunalog.area = area;
    saunalog.rank = rank;
    saunalog.comment = comment;
    return this.saunalogRepository.save(saunalog);
  }

  async delete(id: number) {
    const saunalog = await this.saunalogRepository.findOne(id);
    return this.saunalogRepository.remove(saunalog);
  }
  
}