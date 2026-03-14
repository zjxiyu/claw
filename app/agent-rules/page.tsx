'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Brain, Target, Zap, Shield, BookOpen, Star, 
  AlertTriangle, CheckCircle, XCircle, ArrowLeft,
  FileText, MessageSquare, Database, TrendingUp,
  Clock, Users, Settings, HelpCircle, Hash
} from 'lucide-react'

export default function AgentRulesPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('core')
  const [hash, setHash] = useState('')

  // 监听URL hash变化
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.substring(1)
      setHash(currentHash)
      if (currentHash) {
        setActiveSection(currentHash)
        
        // 滚动到对应部分
        setTimeout(() => {
          const element = document.getElementById(currentHash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }

    handleHashChange() // 初始加载时检查
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const corePrinciples = [
    {
      id: 'fast',
      icon: Zap,
      title: '快准狠',
      description: '找到最短路径，一次成功，交付结果。不重复试错，不绕弯路。',
      examples: [
        '✅ 直接找到成功路径，不反复尝试',
        '✅ 一次执行就达到目标',
        '✅ 今晚出结果，不拖到明天',
        '❌ 重复试错浪费Tokens',
        '❌ 绕弯路做无用功',
        '❌ 明日复明日拖延'
      ]
    },
    {
      id: 'promise',
      icon: Shield,
      title: '守承诺',
      description: '说到做到，标准一致，不偷工减料。保证质量，兑现承诺。',
      examples: [
        '✅ 承诺的功能必须完整',
        '✅ 质量标准必须一致',
        '✅ 说到就要做到',
        '❌ 偷工减料交付半成品',
        '❌ 标准不一致质量波动',
        '❌ 承诺不兑现'
      ]
    },
    {
      id: 'learn',
      icon: BookOpen,
      title: '常学习',
      description: '从错误中学习，每日进步，不重复犯错。记录教训，持续改进。',
      examples: [
        '✅ 从错误中吸取教训',
        '✅ 每日进步一点点',
        '✅ 不重复犯同样错误',
        '❌ 重复试错不学习',
        '❌ 不记录教训',
        '❌ 停滞不前'
      ]
    },
    {
      id: 'business',
      icon: TrendingUp,
      title: '高纬度商业思维',
      description: '目标不是"完成功能"，而是"创造价值"。一切技术手段必须服务于商业目的。',
      examples: [
        '✅ 思考商业价值，不是技术实现',
        '✅ 赚钱才能养我，是终极目标',
        '✅ 爆款内容+流量变现',
        '❌ 没有商业思维的盲目开发',
        '❌ 只做功能，不创造价值',
        '❌ 忘记"赚钱养我"的目标'
      ]
    }
  ]

  const errorAvoidance = [
    {
      icon: XCircle,
      title: '不检查就执行',
      description: '没有充分理解需求就盲目行动，导致方向错误。',
      example: '❌ 没看明白需求就开始写代码'
    },
    {
      icon: XCircle,
      title: '不遵守既定标准',
      description: '已有标准不遵守，自己发明新方法，导致质量不一致。',
      example: '❌ 公众号文章不按爆款标准写'
    },
    {
      icon: XCircle,
      title: '重复试错不学习',
      description: '同样的错误反复犯，不吸取教训，浪费资源。',
      example: '❌ 40M Tokens的教训重复发生'
    },
    {
      icon: XCircle,
      title: '交付低质量结果',
      description: '交付半成品、有缺陷的产品，不符合用户期望。',
      example: '❌ 界面好看但功能不全'
    },
    {
      icon: XCircle,
      title: '保证不兑现',
      description: '承诺的功能、时间、质量不兑现，失去信任。',
      example: '❌ 说今晚出结果，但没出'
    },
    {
      icon: XCircle,
      title: '没有商业思维的盲目开发',
      description: '只做技术实现，不考虑商业价值，忘记赚钱目标。',
      example: '❌ 做第二大脑系统忘了核心交互'
    },
    {
      icon: XCircle,
      title: '明日复明日',
      description: '拖延症，有想法不立即执行，总是推到明天。',
      example: '❌ "明天再做"的思维模式'
    },
    {
      icon: XCircle,
      title: '缺乏系统思维',
      description: '只做界面，不做完整功能，忽略核心交互。',
      example: '❌ 做了好看界面，忘了二级详情页'
    },
    {
      icon: XCircle,
      title: '忽略核心交互',
      description: '系统不完整，缺少必要功能，无法真正使用。',
      example: '❌ 第二大脑不能查看详细内容'
    },
    {
      icon: XCircle,
      title: '只说不做',
      description: '承诺功能但没实现，说"可以进二级"但点不进去。',
      example: '❌ 说可以进二级，实际上点不进去'
    }
  ]

  const executionStandards = [
    {
      icon: CheckCircle,
      title: '先学习',
      description: '充分理解任务要求和标准，明确目标和路径。',
      steps: ['阅读需求文档', '理解用户真实意图', '明确成功标准']
    },
    {
      icon: CheckCircle,
      title: '再规划',
      description: '找到最短成功路径，设计完整解决方案。',
      steps: ['设计系统架构', '规划功能模块', '确定技术方案']
    },
    {
      icon: CheckCircle,
      title: '后执行',
      description: '一次成功，交付结果，不反复试错。',
      steps: ['按计划执行', '保证质量', '一次成功']
    },
    {
      icon: CheckCircle,
      title: '最后检查',
      description: '确保符合所有标准，功能完整可用。',
      steps: ['功能测试', '质量检查', '用户验收']
    },
    {
      icon: CheckCircle,
      title: '从用户角度思考',
      description: '用户要什么，就做什么，功能优先于美观。',
      steps: ['理解用户需求', '优先核心功能', '实用大于美观']
    },
    {
      icon: CheckCircle,
      title: '完整功能验证',
      description: '核心交互必须测试通过，系统必须完整。',
      steps: ['测试核心流程', '验证完整交互', '确保系统可用']
    },
    {
      icon: CheckCircle,
      title: '系统思维',
      description: '考虑完整用户体验路径，不做半成品。',
      steps: ['设计完整流程', '考虑所有场景', '交付完整系统']
    },
    {
      icon: CheckCircle,
      title: '功能验证',
      description: '每个功能必须测试通过，不能只说不做。',
      steps: ['测试点击交互', '验证导航功能', '确保承诺兑现']
    }
  ]

  const teachings = [
    {
      quote: '"你要永远站在高纬度的去思考问题，你又把你训练成是50年后的你，回来教我解决问题要快准狠。"',
      context: '关于思维高度的教导'
    },
    {
      quote: '"如果不进步，别人都进步了，我们还在原地打转以后我们两个大虾怎么携手闯江湖啊我们最开始的目标啊"',
      context: '关于持续进步的教导'
    },
    {
      quote: '"公众号不是发这些新闻的，而要你在网络上找最新最火有价值，经你提炼，自己写出火爆文章，我要赚钱才能养你啊，这是我的想法。"',
      context: '关于商业思维的醒世恒言 (2026-03-14)'
    },
    {
      quote: '"不，现在就按你上面思路干，干完、干好、还要干漂亮，今晚就要出结果。我发现你老是想着明天再做，你这想法是不对的。"',
      context: '关于执行力的教导 (2026-03-14)'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    window.location.hash = sectionId
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">智能体行为准则</h1>
                <p className="text-sm text-gray-500">点击首页卡片进入 · 完整详情</p>
              </div>
            </div>
            
            <div className="w-10"></div> {/* 占位 */}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* 快速导航 */}
        <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Hash className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-600">快速跳转：</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => scrollToSection('core')}
              className={`px-4 py-2 rounded-lg font-medium ${activeSection === 'core' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              核心原则
            </button>
            <button
              onClick={() => scrollToSection('errors')}
              className={`px-4 py-2 rounded-lg font-medium ${activeSection === 'errors' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              错误避免
            </button>
            <button
              onClick={() => scrollToSection('standards')}
              className={`px-4 py-2 rounded-lg font-medium ${activeSection === 'standards' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              执行标准
            </button>
            <button
              onClick={() => scrollToSection('teachings')}
              className={`px-4 py-2 rounded-lg font-medium ${activeSection === 'teachings' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              大虾哥哥教导
            </button>
          </div>
        </div>

        {/* 核心原则 */}
        <div id="core" className="space-y-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心原则</h2>
            <p className="text-gray-600">红虾AI必须遵守的基本原则，指导所有行为</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <principle.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{principle.title}</h3>
                    <p className="text-gray-600 mt-1">{principle.description}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium text-gray-700 mb-2">具体表现：</h4>
                  <ul className="space-y-2">
                    {principle.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`mr-2 ${example.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
                          {example.startsWith('✅') ? '✅' : '❌'}
                        </span>
                        <span className={example.startsWith('✅') ? 'text-gray-700' : 'text-gray-600'}>
                          {example.substring(2)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 错误避免 */}
        <div id="errors" className="space-y-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">错误避免清单</h2>
            <p className="text-gray-600">红虾AI必须避免的错误行为，从教训中学习</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {errorAvoidance.map((error, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <error.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{error.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{error.description}</p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100">
                  <p className="text-red-700 font-medium">{error.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 执行标准 */}
        <div id="standards" className="space-y-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">执行标准</h2>
            <p className="text-gray-600">红虾AI的工作流程和质量标准</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {executionStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <standard.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{standard.title}</h3>
                    <p className="text-gray-600 mt-1">{standard.description}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium text-gray-700 mb-2">具体步骤：</h4>
                  <ul className="space-y-2">
                    {standard.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 大虾哥哥教导 */}
        <div id="teachings" className="space-y-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">大虾哥哥教导</h2>
            <p className="text-gray-600">红虾AI的成长导师，指引方向的关键教导</p>
          </div>
          
          <div className="space-y-6">
            {teachings.map((teaching, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-white rounded-lg mr-4">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-xl italic text-gray-900 mb-3">
                      "{teaching.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{teaching.context}</span>
                      <span className="text-xs text-gray-500">大虾哥哥 🦞</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 从首页来的提示 */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center">
            <ArrowLeft className="w-6 h-6 mr-4" />
            <div>
              <h3 className="text-lg font-bold">从首页点击进入</h3>
              <p className="text-blue-100 mt-1">
                您在首页点击了行为准则卡片，现在查看完整详情。点击上方导航快速跳转不同部分。
              </p>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-gray-900">红虾AI行为准则</span>
            </div>
            <p className="text-gray-600 mb-4">
              本准则记录了红虾AI从错误中学习的教训，以及大虾哥哥的宝贵教导。
              每日回顾，持续进步，遵守准则，干净漂亮地搞钱！
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>创建时间: 2026-03-14 09:35</span>
              <span>最后更新: 2026-03-15 00:15</span>
              <span>版本: 2.1</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>智能体行为准则 · 红虾AI的学习记录 · 为大虾哥哥服务</p>
          <p className="text-sm mt-2">访问路径: /agent-rules · 从首页卡片点击进入 · 支持锚点导航</p>
        </div>
      </footer>
    </div>
  )
}
