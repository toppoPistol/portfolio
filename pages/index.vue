<template>
  <main class="portfolio">
    <section class="hero">
      <p class="label">Freelance Engineer Portfolio</p>
      <h1>課題整理から要件定義まで伴走する<br>Vueエンジニア</h1>
      <p class="intro">
        フロントエンド実装の知見を活かしながら、企画・要件定義・改善提案まで担当。
        AWS Certified Cloud Practitioner の基礎知識を踏まえ、実現可能性とコストを意識した提案を行います。
      </p>
      <a class="button" href="#contact">相談する</a>
    </section>

    <section>
      <h2>提供できること</h2>
      <div class="grid">
        <article class="card" v-for="service in services" :key="service.title">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section>
      <h2>実績イメージ</h2>
      <div class="grid">
        <article class="card" v-for="project in projects" :key="project.title">
          <h3>{{ project.title }}</h3>
          <p class="meta">担当: {{ project.role }}</p>
          <p>{{ project.summary }}</p>
          <ul>
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section>
      <h2>スキル・資格</h2>
      <div class="skills">
        <p><strong>開発:</strong> Vue.js / Nuxt.js / TypeScript / REST API連携</p>
        <p><strong>上流:</strong> 課題ヒアリング / 要件定義 / MVP設計 / 仕様整理</p>
        <p><strong>資格:</strong> AWS Certified Cloud Practitioner</p>
      </div>
    </section>

    <section id="contact" class="contact">
      <h2>お問い合わせ</h2>
      <p>企画段階のご相談、要件整理からの伴走支援も歓迎です。</p>
      <ul>
        <li>Email: yourname@example.com</li>
        <li>X: @your_account</li>
        <li>稼働: 平日 10:00-19:00（日本時間）</li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      services: [
        {
          title: '企画・要件整理',
          description: '現状課題の整理、As-Is/To-Be設計、実装優先度の提案まで対応します。'
        },
        {
          title: 'Vue / Nuxt開発',
          description: '業務画面・管理画面の実装や改修を、保守性を意識した構成で実施します。'
        },
        {
          title: '改善提案',
          description: '速度・運用・ユーザー体験の観点から、リリース後の改善案を継続的に提案します。'
        }
      ],
      projects: [
        {
          title: 'SaaS管理画面の機能改善',
          role: '課題ヒアリング / 要件定義 / Vue実装',
          summary: '問い合わせ対応の工数が高い状況を分析し、優先度の高い検索・絞り込み機能を追加。',
          points: [
            '週次ヒアリングで課題を可視化',
            'MVP範囲を定義して2週間でリリース',
            '運用フローに合わせたUI改善を実施'
          ]
        },
        {
          title: '予約業務のWeb化プロジェクト',
          role: '要件整理 / 画面設計 / 実装',
          summary: '紙運用の予約管理をWeb化し、重複予約と確認漏れを防止する仕組みを構築。',
          points: [
            '業務フローをAs-Is/To-Beで整理',
            '関係者ごとの権限要件を定義',
            'Vueで管理画面を構築'
          ]
        },
        {
          title: '静的サイトのAWS配信基盤整備',
          role: '構成提案 / 初期設定 / ドキュメント化',
          summary: 'S3 + CloudFrontで配信基盤を整備し、更新手順をチームに展開。',
          points: [
            '証明書とドメイン設定を整理',
            '運用手順書を作成して引き継ぎ',
            '低コスト運用を前提に構成提案'
          ]
        }
      ]
    }
  }
})
</script>

<style scoped>
:root {
  color-scheme: light;
}

.portfolio {
  max-width: 980px;
  margin: 0 auto;
  padding: 40px 20px 64px;
  color: #1f2937;
  line-height: 1.7;
}

section {
  margin-top: 56px;
}

.hero {
  margin-top: 16px;
}

.label {
  color: #2563eb;
  font-weight: 700;
  margin-bottom: 12px;
}

h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1.3;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.6rem;
  margin-bottom: 16px;
}

h3 {
  margin-bottom: 8px;
  font-size: 1.15rem;
}

.intro {
  max-width: 720px;
}

.button {
  display: inline-block;
  margin-top: 20px;
  background: #2563eb;
  color: #fff;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
}

.meta {
  font-size: 0.92rem;
  color: #4b5563;
  margin-bottom: 8px;
}

.skills p {
  margin: 4px 0;
}

.contact ul {
  padding-left: 18px;
}
</style>
