---
title: "AI 모델 및 배포"
slug: /ai-models
---

:::note 일러두기
이 페이지는 기계 번역을 통해 한국어로 번역했습니다. 어색한 표현이 있을 수 있으니 양해 바랍니다.
:::

## AI 모델이란 무엇인가요?

![AI 모델](https://learn.microsoft.com/windows/ai/images/winml-model-flow.png)

AI 모델(또는 머신러닝 모델)은  특정 유형의 패턴을 _인식하기 위해 _데이터 세트에 대해 학습된  프로그램_입니다. 모델을 학습시키면 AI가 새로운 데이터를 추론하고 예측하는 데 사용할 수 있는 _알고리즘_이 정의됩니다. 

[🔖 | 자세히 알아보기](https://learn.microsoft.com/windows/ai/windows-ml/what-is-a-machine-learning-model)

## 대규모 언어 모델(LLM)이란 무엇인가요?

대규모 언어 모델(LLM)은 다양한 소스의 방대한 양의 데이터로 학습된 자연어 텍스트를 처리하고 생성할 수 있는 AI의 한 유형입니다. '기초 모델'은 LLM의 특정 인스턴스 또는 버전을 의미합니다. 다음 단원에서 이 주제에 대해 더 자세히 다루겠습니다.
[🔖 | 자세히 알아보기](https://learn.microsoft.com/training/modules/introduction-large-language-models/)

## 임베딩이란 무엇인가요?

임베딩은 머신러닝 모델과 알고리즘이 보다 쉽게 사용할 수 있는 **특수 데이터 표현 형식**입니다. 임베딩은 텍스트 데이터의 의미론적 의미를  부동소수점 숫자의 벡터로 밀도 높은 정보로 표현한 것입니다. 벡터 공간에서 임베딩 사이의 거리는 (원본) 텍스트 입력 간의 의미적 유사성과 직접적인 상관관계가 있습니다. 

[🔖 | 자세히 알아보기](https://learn.microsoft.com/azure/ai-services/openai/concepts/understand-embeddings#embedding-models)

임베딩은 텍스트 데이터를 보다 효율적으로 쿼리하기 위해 벡터 검색 방법을 사용하는 데 도움이 됩니다. 예를 들어, MongoDB vCore용 Azure Cosmos DB와 같은 데이터베이스에서 벡터 유사성 검색을 강화합니다. 현재 권장 임베딩 모델은 `text-embedding-ada-002`입니다.

[🔖 | 자세히 알아보기](https://learn.microsoft.com/azure/ai-services/openai/how-to/embeddings?tabs=console)

## 어떤 모델을 사용해야 하나요?

모델을 선택할 때 고려해야 할 사항이 많습니다.

- 모델 가격(토큰별, 아티팩트별)
- 모델 가용성(버전별, 지역별)
- 모델 성능(평가 지표)
- 모델 기능(기능 및 매개변수)

일반적인 가이드로는 다음을 권장합니다:
- **gpt-35-turbo로 시작하세요**: 이 모델은 매우 경제적이고 성능이 우수합니다. 일반적으로 채팅 애플리케이션(예: OpenAI의 ChatGPT)에 사용되지만 채팅 및 대화 외에도 다양한 작업에 사용할 수 있습니다.
- **GPT-35-TURBO-16K, GPT-4 또는 GPT-4-32K로 이동하세요**: 4,096개 이상의 토큰을 생성해야 하거나 더 큰 프롬프트를 지원해야 하는 경우 이러한 모델은 더 비싸고 속도가 느릴 수 있으며 가용성이 제한적이지만, 현재 가장 강력한 모델입니다. *토큰화에 대해서는 다음 단원에서 더 자세히 다룰 예정입니다.*
- **임베딩을 고려하세요**: 검색, 클러스터링, 추천, 이상 징후 탐지와 같은 작업에 추천합니다.
- **이미지를 생성하려면 DALL-E(미리보기)를 사용해 보세요**: 텍스트(채팅)가 출력되는 이전 모델과 달리 사용자가 제공하는 텍스트 프롬프트에서 활용할 수 있습니다.
- **음성-텍스트 변환 또는 오디오 트랜스크립션에는 Whisper(미리보기)를 사용해 보세요**: 영어 음성이 포함된 오디오 파일을 전사하도록 훈련되고 최적화되어 있지만 다른 언어의 음성도 전사할 수 있습니다. 모델 출력은 영어 텍스트입니다. 프롬프트 기반 안내에 따라 개별 오디오 파일을 빠르게 전사하거나 다른 언어의 오디오를 영어로 번역하는 데 사용할 수 있습니다.

[🔖 | 자세히 알아보기](https://learn.microsoft.com/azure/ai-services/openai/how-to/working-with-models?tabs=powershell)

## Azure OpenAI(AOAI)란?

OpenAI에는 사용자가 제공한 자연어 텍스트 입력 또는 **"프롬프트"**에서 다양한 유형의 콘텐츠(텍스트, 이미지, 오디오, 코드)를 "생성"할 수 있는 [다양한 언어 모델 집합](https://platform.openai.com/docs/models/overview)이 있습니다. Azure OpenAI 서비스는 REST API를 통해 이러한 OpenAI 모델에 대한 액세스를 제공합니다. 

[현재 사용 가능한 모델](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models)에는 GPT-4, GPT-4 Turbo 미리 보기, GPT-3.5, 임베딩, DALL-E(미리 보기) 및 Whisper(미리 보기)가 포함됩니다. 기본 모델에 대한 OpenAI 업데이트와 보조를 맞추기 위해 [정기적으로 새 버전을 릴리스](https://learn.microsoft.com/azure/ai-services/openai/concepts/model-versions)하는 Azure OpenAI. 개발자는 프로그래밍 방식으로(Python SDK 사용) 또는 브라우저를 통해(Azure AI Studio 사용) 액세스할 수 있습니다.

[🔖 | 자세히 알아보기](https://learn.microsoft.com/azure/ai-services/openai/overview).

## 워크샵 모델 배포

:::info Azure 플레이그라운드 소개
이 워크샵에서는
 - **'gpt-35-turbo'**: Chat Completions
 - **'gpt-4'**: 비교
:::

명심해야 할 두 가지 주요 고려 사항은 다음과 같습니다: 

- [모델 버전](https://learn.microsoft.com/azure/ai-services/openai/concepts/models)- 모델은 무엇을 제공하나요? 트레이닝 마감일 및 종료일은 어떻게 되나요?
- [쿼터 및 제한](https://learn.microsoft.com/azure/ai-services/openai/quotas-limits) - 어떤 지역에서 모델을 사용할 수 있나요? 모델 사용 한도는 어떻게 되나요?

다음은 우리가 집중적으로 살펴볼 두 가지 모델에 대한 데이터의 예시입니다. 다른 모델에 대한 자세한 내용은 위의 링크를 참조하세요.

| 모델(버전) | 가용성 | 요청 한도 | 학습 데이터(최신) |
|:---|:---|:---|:---|
| [gpt-3.5-turbo (0613)](https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-35-models)| 10개 지역 | 4096 토큰 | 2021년 9월 |
| [gpt-4 (0613)](https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-4-and-gpt-4-turbo-preview-models)| 9개 지역 | 8192 토큰 | 2021년 9월 |
