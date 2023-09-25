export const mockMvcLibraryData = {
  filters: {
    contentTypes : ['Teching Method'],
    subjects : ['Hindi', 'English'],
    gradeLevels : ['Class 1'],
    chapters : ['Test chapter']
    },
    fakeParamMap : {
        collectionId: 'do_1130307931241103361441',
        collectionUnitId: 'do_11303079312687923216125',
        programId: '60ad12d0-b07c-11ea-92c9-6f8fff7dce02s'
    },
    collectionHierarchyReadSuccess: {
        'id': 'api.content.hierarchy.get',
        'ver': '3.0',
        'ts': '2020-06-30T07:32:01ZZ',
        'params': {
          'resmsgid': '4efb3bb8-1773-4aec-a6dd-6364e66ed4de',
          'msgid': null,
          'err': null,
          'status': 'successful',
          'errmsg': null
        },
        'responseCode': 'OK',
        'result': {
          'content': {
            'ownershipType': ['createdBy'],
            'subject': ['Hindi'],
            'channel': '01303077037223116866',
            'organisation': ['Vidya2'],
            'language': ['English'],
            'mimeType': 'application/vnd.ekstep.content-collection',
            'objectType': 'Content',
            'gradeLevel': ['Class 1', 'Class 10', 'Class 12'],
            'children': [
              {
                'ownershipType': ['createdBy'],
                'parent': 'do_1130307931241103361441',
                'code': 'do_11300085802137190416',
                'origin': 'do_11300085802137190416',
                'channel': 'sunbird',
                'language': ['English'],
                'mimeType': 'application/vnd.ekstep.content-collection',
                'createdOn': '2020-05-28T13:36:29.121+0000',
                'lastUpdatedOn': '2020-05-28T13:36:29.121+0000',
                'contentEncoding': 'gzip',
                'originData': {'channel': '012983850117177344161'},
                'contentType': 'TextBookUnit',
                'dialcodeRequired': 'No',
                'identifier': 'do_11303079312687923216125',
                'lastStatusChangedOn': '2020-05-28T13:36:29.121+0000',
                'audience': ['Learner'],
                'visibility': 'Parent',
                'index': 1,
                'mediaType': 'content',
                'languageCode': ['en'],
                'versionKey': '1590672989121',
                'allowedContentTypes': [
                  'LearningOutcomeDefinition',
                  'PracticeQuestionSet',
                  'CuriosityQuestionSet',
                  'ConceptMap',
                  'ExperientialResource',
                  'MarkingSchemeRubric'
                ],
                'framework': 'ekstep_ncert_k-12',
                'depth': 1,
                'compatibilityLevel': 1,
                'name': 'Unit1',
                'openForContribution': true,
                'programId': '30e8ee50-a0e8-11ea-86f3-39a7053e4633',
                'status': 'Draft',
                'children': [
                  {
                    'ownershipType': ['createdBy'],
                    'unitIdentifiers': ['do_11303079312687923216125'],
                    'parent': 'do_11303079312687923216125',
                    'code': '616d296c-853f-fde8-82dc-de1546ddc4d1',
                    'organisationId': 'b1748aa4-fd18-460d-94f5-177d1f7867bd',
                    'channel': '01303077037223116866',
                    'language': ['English'],
                    'mimeType': 'video/mp4',
                    'idealScreenSize': 'normal',
                    'createdOn': '2020-06-12T06:35:26.734+0000',
                    'objectType': 'Content',
                    // tslint:disable-next-line:max-line-length
                    'appIcon': 'https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553051403878414/artifact/explanation.thumb_1576602846206.png',
                    'appId': 'local.sunbird.portal',
                    'contentDisposition': 'inline',
                    'lastUpdatedOn': '2020-06-12T06:36:04.181+0000',
                    'contentEncoding': 'identity',
                    'collectionId': 'do_1130307931241103361441',
                    'contentType': 'ExperientialResource',
                    'dialcodeRequired': 'No',
                    'identifier': 'do_113041203009388544115',
                    'lastStatusChangedOn': '2020-06-12T06:35:26.734+0000',
                    'audience': ['Learner'],
                    'creator': 'vbdock23',
                    'os': ['All'],
                    'visibility': 'Default',
                    'index': 2,
                    'mediaType': 'content',
                    'osId': 'org.ekstep.quiz.app',
                    'languageCode': ['en'],
                    'version': 2,
                    'versionKey': '1591943764181',
                    'license': 'CC BY 4.0',
                    'idealScreenDensity': 'hdpi',
                    'framework': 'ekstep_ncert_k-12',
                    'depth': 2,
                    'createdBy': '7e3f00cf-9c44-4cf3-a00d-420bfbc0e512',
                    'compatibilityLevel': 1,
                    'name': 'Untitled',
                    'programId': '30e8ee50-a0e8-11ea-86f3-39a7053e4633',
                    'resourceType': 'Read',
                    'status': 'Draft',
                    // tslint:disable-next-line:max-line-length
                    'downloadUrl': 'https://dockstorage.blob.core.windows.net/sunbird-content-dock/content/assets/do_113041203009388544115/star_trails.mp4',
                    // tslint:disable-next-line:max-line-length
                    'artifactUrl': 'https://dockstorage.blob.core.windows.net/sunbird-content-dock/content/assets/do_113041203009388544115/star_trails.mp4',
                    'sYS_INTERNAL_LAST_UPDATED_ON': '2020-06-12T06:36:04.225+0000',
                    'consumerId': '028d6fb1-2d6f-4331-86aa-f7cf491a41e0',
                    'size': 39665059
                  }
                ]
              },
              {
                'ownershipType': ['createdBy'],
                'parent': 'do_1130307931241103361441',
                'code': 'do_11300085802138828818',
                'origin': 'do_11300085802138828818',
                'channel': 'sunbird',
                'language': ['English'],
                'mimeType': 'application/vnd.ekstep.content-collection',
                'createdOn': '2020-05-28T13:36:29.204+0000',
                'lastUpdatedOn': '2020-05-28T13:36:29.204+0000',
                'contentEncoding': 'gzip',
                'originData': {'channel': '012983850117177344161'},
                'contentType': 'TextBookUnit',
                'dialcodeRequired': 'No',
                'identifier': 'do_11303079312755916816150',
                'lastStatusChangedOn': '2020-05-28T13:36:29.204+0000',
                'audience': ['Learner'],
                'visibility': 'Parent',
                'index': 4,
                'mediaType': 'content',
                'languageCode': ['en'],
                'versionKey': '1590672989204',
                'allowedContentTypes': [
                  'LearningOutcomeDefinition',
                  'PracticeQuestionSet',
                  'CuriosityQuestionSet',
                  'ConceptMap',
                  'ExperientialResource',
                  'MarkingSchemeRubric'
                ],
                'framework': 'ekstep_ncert_k-12',
                'depth': 1,
                'compatibilityLevel': 1,
                'name': 'Unit4',
                'openForContribution': true,
                'programId': '30e8ee50-a0e8-11ea-86f3-39a7053e4633',
                'status': 'Draft'
              }
            ],
            'appId': 'dev.dock.portal',
            'contentEncoding': 'gzip',
            'lockKey': 'e2388b8a-e29a-43eb-a98a-0863ecabdac8',
            'contentType': 'TextBook',
            'identifier': 'do_1130307931241103361441',
            'audience': ['Learner'],
            'visibility': 'Default',
            'consumerId': '9f1bd4a1-c617-422b-8d5a-d24c7d3ade2e',
            'childNodes': [
              'do_11303079312748544016144',
              'do_11303079312687923216125',
              'do_11303079312755916816150',
              'do_11303079312702668816138',
              'do_1130364523365007361153',
              'do_113041203009388544115',
              'do_113043460067475456169',
              'do_1130435519153848321102',
              'do_1130440139823267841111',
              'do_1130440174598062081112',
              'do_1130440382410014721116',
              'do_1130440523712757761117',
              'do_1130440544692060161121',
              'do_1130440547310387201122',
              'do_1130440583469301761123',
              'do_1130442246060687361127',
              'do_1130442248266792961128',
              'do_1130454074902364161152',
              'do_1130483562925178881200',
              'do_11305326072731238413113'
            ],
            'rejectedContents': [
              'do_1130440174598062081112',
              'do_1130440547310387201122',
              'do_1130440583469301761123',
              'do_1130442248266792961128'
            ],
            'mediaType': 'content',
            'osId': 'org.ekstep.quiz.app',
            'languageCode': ['en'],
            'version': 2,
            'allowedContentTypes': [
              'LearningOutcomeDefinition',
              'PracticeQuestionSet',
              'CuriosityQuestionSet',
              'ConceptMap',
              'ExperientialResource',
              'MarkingSchemeRubric'
            ],
            'license': 'CC BY 4.0',
            'name': '16_april',
            'status': 'Draft',
            'code': 'org.sunbird.8kr1Wl',
            'origin': 'do_11300085766781337611',
            'description': 'Enter description for TextBook',
            'medium': ['Hindi', 'English'],
            'acceptedContents': [
              'do_113043460067475456169',
              'do_1130435519153848321102',
              'do_1130364523365007361153',
              'do_1130440139823267841111',
              'do_1130440382410014721116',
              'do_1130440544692060161121',
              'do_1130442246060687361127'
            ],
            'idealScreenSize': 'normal',
            'createdOn': '2020-04-16T06:32:38.292+0000',
            'contentDisposition': 'inline',
            'lastUpdatedOn': '2020-06-29T07:27:15.045+0000',
            'originData': {'channel': '012983850117177344161'},
            'dialcodeRequired': 'No',
            'lastStatusChangedOn': '2020-04-16T06:32:38.292+0000',
            'createdFor': ['012983850117177344161'],
            'creator': 'Kayal',
            'os': ['All'],
            'chapterCount': 4,
            'versionKey': '1593415635045',
            'sourcingRejectedComments': {
              'do_1130440547310387201122': 'Bad content',
              'do_1130440583469301761123': 'Not good',
              'do_1130442248266792961128': 'bad'
            },
            'idealScreenDensity': 'hdpi',
            'framework': 'ekstep_ncert_k-12',
            'depth': 0,
            'createdBy': 'cca53828-8111-4d71-9c45-40e569f13bad',
            'compatibilityLevel': 1,
            'openForContribution': true,
            'board': 'CBSE',
            'programId': '30e8ee50-a0e8-11ea-86f3-39a7053e4633',
            'resourceType': 'Book'
          }
        }
    },
    collectionHierarchyReadFailed: {

    },
    programReadSuccess: {
        'id': 'api.program.read',
        'ts': '2020-06-30T07:32:01.385Z',
        'params': {
          'resmsgid': 'c9a76d91-baa3-11ea-a9a3-8bcf5dc120fa',
          'msgid': 'c9a76d90-baa3-11ea-a9a3-8bcf5dc120fa',
          'status': 'successful',
          'err': null,
          'errmsg': null
        },
        'ver':'',
        'responseCode': 'OK',
        'result': {
          'program_id': '60ad12d0-b07c-11ea-92c9-6f8fff7dce02',
          'name': 'open nomination demo',
          'description': 'open nomination demo',
          'type': 'public',
          'collection_ids': ['do_11301446643920896013'],
          'content_types': ['PedagogyFlow', 'TeachingMethod'],
          'startdate': '2020-06-17T09:24:42.622Z',
          'enddate': '2020-06-17T18:30:00.000Z',
          'nomination_enddate': '2020-06-16T18:30:00.000Z',
          'shortlisting_enddate': '2020-06-16T18:30:00.000Z',
          'content_submission_enddate': '2020-06-17T18:30:00.000Z',
          'image': null,
          'status': 'Live',
          'slug': 'sunbird',
          // tslint:disable-next-line:max-line-length
          'config': '{"_comments":"","loginReqired":true,"framework":"NCF","gradeLevel":["Class 6"],"medium":["English"],"subject":["Mathematics"],"roles":[{"id":1,"name":"CONTRIBUTOR","default":true,"defaultTab":1,"tabs":[1]},{"id":2,"name":"REVIEWER","defaultTab":2,"tabs":[2]}],"header":{"id":"ng.sunbird.header","ver":"1.0","compId":"headerComp","author":"Venkat","description":"","publishedDate":"","data":{},"config":{"tabs":[{"index":1,"label":"Contribute","onClick":"collectionComponent"},{"index":2,"label":"Review","onClick":"collectionComponent"},{"index":3,"label":"Dashboard","onClick":"dashboardComponent"}]}},"components":[{"id":"ng.sunbird.collection","ver":"1.0","compId":"collectionComponent","author":"Venkat","description":"","publishedDate":"","data":{},"config":{"filters":{"implicit":[{"code":"framework","defaultValue":"NCFCOPY","label":"Framework"},{"code":"board","label":"Board"},{"code":"medium","defaultValue":["English"],"label":"Medium"}],"explicit":[{"code":"gradeLevel","range":["Kindergarten","Grade 1","Grade 2","Grade 3"],"label":"Class","multiselect":false,"defaultValue":["Kindergarten","Grade 1"],"visibility":true},{"code":"subject","range":["English","Mathematics","Hindi"],"label":"Subject","multiselect":false,"defaultValue":["English"],"visibility":true}]},"groupBy":{"value":"subject","defaultValue":"subject"},"collectionType":"Textbook","collectionList":[],"status":["Draft","Live"]}},{"id":"ng.sunbird.chapterList","ver":"1.0","compId":"chapterListComponent","author":"Kartheek","description":"","publishedDate":"","data":{},"config":{"contentTypes":{"value":[{"id":"TeachingMethod","label":"Teaching Method","onClick":"uploadComponent","mimeType":["application/pdf"],"metadata":{"name":"Teaching Method","description":"TeachingMethod","resourceType":"Read","contentType":"TeachingMethod","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf","size":"50"}},{"id":"PedagogyFlow","label":"Pedagogy Flow","onClick":"uploadComponent","mimeType":["application/pdf"],"metadata":{"name":"Pedagogy Flow","description":"PedagogyFlow","resourceType":"Read","contentType":"PedagogyFlow","audience":["Learner"],"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png","marks":5},"filesConfig":{"accepted":"pdf","size":"50"}}],"defaultValue":[{"id":"vsaPracticeQuestionContent","label":"Practice Sets","onClick":"questionSetComponent","mimeType":["application/vnd.ekstep.ecml-archive"],"metadata":{"name":"Practice QuestionSet","description":"Practice QuestionSet","resourceType":"Learn","contentType":"PracticeQuestionSet","audience":["Learner"],"appIcon":"","marks":5},"questionCategories":["vsa"]}]}}},{"id":"ng.sunbird.uploadComponent","ver":"1.0","compId":"uploadContentComponent","author":"Kartheek","description":"","publishedDate":"","data":{},"config":{"filesConfig":{"accepted":"pdf, mp4, webm, youtube","size":"50"},"formConfiguration":[{"code":"learningOutcome","dataType":"list","description":"Learning Outcomes For The Content","editable":true,"inputType":"multiselect","label":"Learning Outcome","name":"LearningOutcome","placeholder":"Select Learning Outcomes","required":false,"visible":true},{"code":"attributions","dataType":"list","description":"Enter Attributions","editable":true,"inputType":"text","label":"Attributions","name":"Attributions","placeholder":"Enter Attributions","required":false,"visible":true,"helpText":"If you have relied on another work to create this Content, provide the name of that creator and the source of that work."},{"code":"copyright","dataType":"text","description":"Enter Copyright and Year","editable":true,"inputType":"text","label":"Copyright and Year","name":"Copyright","placeholder":"Enter Copyright and Year","required":true,"visible":true,"helpText":"If you are an individual, creating original Content, you are the copyright holder. If you are creating Content on behalf of an organisation, the organisation may be the copyright holder. Please fill as <Name of copyright holder>, <Year of publication>"},{"code":"creator","dataType":"text","description":"Enter The Author Name","editable":true,"inputType":"text","label":"Author","name":"Author","placeholder":"Enter Author Name","required":true,"visible":true,"helpText":"Provide name of creator of this Content."},{"code":"license","dataType":"list","description":"License For The Content","editable":true,"inputType":"select","label":"License","name":"License","placeholder":"Select License","required":true,"visible":true,"helpText":"Choose the most appropriate Creative Commons License for this Content"},{"code":"contentPolicyCheck","dataType":"boolean","editable":false,"inputType":"checkbox","name":"Content Policy Check","required":true,"visible":true}],"resourceTitleLength":"200","tenantName":"SunbirdEd"}},{"id":"ng.sunbird.practiceSetComponent","ver":"1.0","compId":"practiceSetComponent","author":"Kartheek","description":"","publishedDate":"","data":{},"config":{"No of options":4,"solutionType":["Video","Text & image"],"questionCategory":["vsa","sa","ls","mcq","curiosity"],"formConfiguration":[{"code":"learningOutcome","dataType":"list","description":"Learning Outcomes For The Content","editable":true,"inputType":"multiselect","label":"Learning Outcome","name":"LearningOutcome","placeholder":"Select Learning Outcomes","required":false,"visible":true},{"code":"attributions","dataType":"list","description":"Enter Attributions","editable":true,"inputType":"text","label":"Attributions","name":"Attributions","placeholder":"Enter Attributions","required":false,"visible":true,"helpText":"If you have relied on another work to create this Content, provide the name of that creator and the source of that work."},{"code":"copyright","dataType":"text","description":"Enter Copyright and Year","editable":true,"inputType":"text","label":"Copyright and Year","name":"Copyright","placeholder":"Enter Copyright and Year","required":true,"visible":true,"helpText":"If you are an individual, creating original Content, you are the copyright holder. If you are creating Content on behalf of an organisation, the organisation may be the copyright holder. Please fill as <Name of copyright holder>, <Year of publication>"},{"code":"creator","dataType":"text","description":"Enter The Author Name","editable":true,"inputType":"text","label":"Author","name":"Author","placeholder":"Enter Author Name","required":true,"visible":true,"helpText":"Provide name of creator of this Content."},{"code":"license","dataType":"list","description":"License For The Content","editable":true,"inputType":"select","label":"License","name":"License","placeholder":"Select License","required":true,"visible":true,"helpText":"Choose the most appropriate Creative Commons License for this Content"},{"code":"contentPolicyCheck","dataType":"boolean","editable":false,"inputType":"checkbox","name":"Content Policy Check","required":true,"visible":true}],"resourceTitleLength":"200","tenantName":"","assetConfig":{"image":{"size":"50","accepted":"jpeg, png, jpg"},"video":{"size":"50","accepted":"pdf, mp4, webm, youtube"}}}},{"id":"ng.sunbird.dashboard","ver":"1.0","compId":"dashboardComp","author":"Venkanna Gouda","description":"","publishedDate":"","data":{},"config":{}}],"actions":{"showCountPanel":{"roles":[1,2]},"showContribution":{"roles":[1]},"showUpforReview":{"roles":[2]},"showTotalContribution":{"roles":[1]},"showMyContribution":{"roles":[1]},"showRejected":{"roles":[1]},"showUnderReview":{"roles":[1]},"showTotalUnderReview":{"roles":[2]},"showAawaitingReview":{"roles":[2]},"showFilters":{"roles":[1,2,3]},"showAddResource":{"roles":[1]},"showEditResource":{"roles":[1]},"showMoveResource":{"roles":[1]},"showDeleteResource":{"roles":[1]},"showPreviewResource":{"roles":[2]},"showDashboard":{"roles":[3]},"showCert":{"roles":[4]},"showSave":{"roles":[1]},"showEdit":{"roles":[1]},"showChangeFile":{"roles":[1]},"showRequestChanges":{"roles":[2]},"showPublish":{"roles":[2]},"showSubmit":{"roles":[1]},"showCreatorView":{"roles":[1]},"showReviewerView":{"roles":[2]},"showCreateQuestion":{"roles":[1]},"showDeleteQuestion":{"roles":[1]}},"sharedContext":["channel","framework","board","medium","gradeLevel","subject","topic"]}',
          'rolemapping': null,
          'createdby': 'bf04ebc8-16a5-418f-bd72-904911c5f66f',
          'updatedby': null,
          'createdon': '2020-06-17T09:24:42.622Z',
          'updatedon': '2020-06-17T09:24:53.314Z',
          'rootorg_id': '013013637585788928216',
          'sourcing_org_name': 'Tamilnadu_Tenant',
          'channel': 'Sunbird',
          'template_id': 'template1',
          'guidelines_url': ''
        }
    },
    mvcSearchSuccess: {
        'id': 'ekstep.mvc-composite-search.search',
        'ver': '1.0',
        'ts': '2020-06-30T07:32:02ZZ',
        'params': {
          'resmsgid': '0ad24d3a-14e9-494f-b99b-1075c5dbd3e0',
          'msgid': null,
          'err': null,
          'status': 'successful',
          'errmsg': null
        },
        'responseCode': 'OK',
        'result': {
          'count': 1,
          'content': [
            {
              'identifier': 'do_2123125146963066881113',
              'subject': 'Computer Science',
              // tslint:disable-next-line:max-line-length
              'downloadUrl': 'https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123125146963066881113/my-textbook-1_1539087291666_do_2123125146963066881113_4.0_spine.ecar',
              'description': 'Computer Science textbook',
              'mimeType': 'application/vnd.ekstep.content-collection',
              'medium': ['English', 'Tamil', 'Telegu'],
              'objectType': 'Content',
              'gradeLevel': ['Class 11', 'Class 12'],
              'framework': 'NCF',
              'name': 'Computer Science',
              'lastUpdatedOn': '2020-05-09T12:14:48.558+0000',
              'contentType': 'TextBook',
              'resourceType': 'Book',
              'status': 'Live'
            }
          ]
        }
    },
    plusMinusGradeLevelRes : ['Class 1', 'Class 10', 'Class 12', 'Class 2', 'Class 11', 'Class 9']
};
